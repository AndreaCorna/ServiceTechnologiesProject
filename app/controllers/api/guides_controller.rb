class Api::GuidesController < ApplicationController

  # return the list of guides based on the current logged user
  # url GET /guides
  def index
    user = current_user
    #not authenticate user return empty array
    if user.nil?
      render json: []
      return
    end
    #returning user guides
    guides = Guide.where(:user_id => user.id)


    render json: guides
  end

  def s3_direct_post
      s3_direct_post = S3_BUCKET.presigned_post(key: "uploads/#{SecureRandom.uuid}/${filename}", success_action_status: 201, acl: :public_read)


     result = Hash.new
      result['url'] =  "#{s3_direct_post.url}"
      result['AWSAccessKeyId'] = s3_direct_post.fields['AWSAccessKeyId']
      result['key'] =  "#{s3_direct_post.fields['key']}"
      result['policy'] =  "#{s3_direct_post.fields['policy']}"
      result['signature'] =  "#{s3_direct_post.fields['signature']}"
      result['success_action_status'] =  "#{s3_direct_post.fields['success_action_status']}"
      result['acl'] =  "#{s3_direct_post.fields['acl']}"

      render json: result
     # render template:  "shared_guide/show"  ,:locals => { :s3 => @s3_direct_post }
  end

  def error(message)
    response = Hash.new
    response['message']= message
    render json:     response

  end

  # POST /guides/:id
  #create in the db a guide object if some parameter s are provided
  def create
    puts params
    guide = Guide.new
    if (params['name'] == '')
      error('The guide need to have a name')
      return
    end

    if (params['days'].nil?)
      error 'At least one day needs to be added to the guide'
      return
    end
    puts current_user
    if current_user.nil?
      puts 'nil user'
      error 'Please Login before creating your guide'
      return
    end
    guide.name= params['name']
    guide.description=params['description']
    guide.city = params['city']
    guide.lat_lng = params['lat_lng']
    guide.user_id = current_user.id
    if(!params['image'].nil? and params['image'].downcase=~/(\.|\/)(gif|jpe?g|png)$/ )
      guide.image = params['image']
      puts guide.image
    end

    #get lat and lng of the passed city
    #first check if one of the DB


    params['days'].each { |day|
      if not day['schedule'].nil?
        day['schedule'].each { |curr_place|
          #check if exist a place in db with same name and google id if not create a new object
          curr_place['id'] =curr_place['id'].to_s #avoind problem with id of hotels which are integer
          place =  PlaceSummary.where(:google_id => curr_place['id'] , :name => curr_place['name']).first_or_initialize do |place|
            #code executed only if place not already in database
            place.name = curr_place['name']
            place.lat = curr_place['lat']
            place.lng = curr_place['lng']
            place.rating = curr_place['rating']
            place.price = curr_place['price']
            if not curr_place['photos'].nil?
              place.image = curr_place['photos'][0]['image']
              puts 'guide.imacsacascasge'

              puts guide.image

            else
              place.image = '/assets/images/empty_photo.png'
            end



            place.icon = curr_place['icon']
            place.tag = curr_place['tag']
            place.description = curr_place['description']
            place.city = params['city']
            place.google_id = curr_place['id']

            place.save
          end

          #if no image added to the guide add the one of the first item with image
          if (guide.image.nil? or guide.image == '' and place.image !='/assets/images/empty_photo.png')
            guide.image = place.image
            puts guide.image
          end

          guide.place_summaries << place
          guide.guide_place_summaries.last.date = day['day']



        }
      end


    }
    #check if some place has been added
    if (guide.place_summaries.empty?)
      error 'Need to insert at least one place to the guide'
      return
    end
    #check if the guide has succeded in taking an image else no image set
    if (guide.image.nil? or guide.image == '')
      guide.image = '/assets/images/empty_photo.png'
    end

    guide.save



    render json:  'OK'
  end



  # return as json the guide with id equals to the id parameter
  # GET /guides/id
  def show


    id = params['id']
    result = Hash.new
    #get guide from the id passed through params and set result field of guide

    guide = Guide.find_by_id id
    if guide.nil?
      render json: ''
      return
    end

    #check if guide of an user or a shared one
    user = current_user
    if user.nil?
      guides = []
    else
      guides = Guide.where(:user_id => user.id)
    end
    puts 'guides'
    puts guides
    puts guide.inspect
    if !guides.include?guide and  guide.shared != true
      puts 'denied'
      render json: ''
      return
    end

    puts 'allowed'

    result['name'] = guide.name
    result['city'] = guide.city
    result['description']  = guide.description
    result['rating']  = guide.rating
    result['days'] = []

    # get all the element of the join modele matching the guide id
    guide_places = GuidePlaceSummary.where(:guide_id => id ).order('date ASC')
    #select distinct dates in guide_places which will be the dates of the guide
    days = guide_places.uniq.pluck(:date)
    days.each { |day|

      result_day = Hash.new
      #for each day create hashmap with day and a schedule field
      result_day['day'] = day
      result_day['schedule']  = []
      #get list of places of this particular day
      cur_day_places =  guide_places.where(:date => day )
      cur_day_places.each { |place|
        #add place to the current day schedule
        my_place = PlaceSummary.find_by_id place.place_summary_id

        result_day['schedule'] << my_place
      }
      result['days'] << result_day
    }


    render json: result
  end

  # search  a guide by the id passed and set the shared param
  # accordingly the value of the share parameter
  # PUT guides/:id
  # Angular example
  #  $scope.share = function () {
  #      $http.put('/guides/'+$stateParams.id,{share:true});
  # };

  def update
    puts 'update'
    id = params['id']
    share = params['share']


    guide = Guide.find(id)
    if guide.nil?
      render json: 'Not found'
      return
    end
    guide.shared=share
    guide.save

    render json: 'Ok'

  end

  #delete a guide with id
  #DELETE  guides/:id
  def destroy
    id = params['id']
    guide = Guide.find(id)
    if guide.nil?
      render json: 'Not found'
      return
    end
    guide.destroy
    render json: 'Ok'
  end
end
