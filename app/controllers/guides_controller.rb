class GuidesController < ApplicationController



  def index
    guides = Guide.all
    render json: guides
  end

  def s3_direct_post
      s3_direct_post = S3_BUCKET.presigned_post(key: "uploads/#{SecureRandom.uuid}/${filename}", success_action_status: 201, acl: :public_read)
      puts  's3_direct_mkmjmjkmkmjjkmkjmjkpost'
      puts  s3_direct_post.fields.to_json.html_safe
      puts s3_direct_post.fields['AWSAccessKeyId']

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

  def create
    puts params
    guide = Guide.new
    guide.name= params['name']
    guide.description=params['description']
    guide.city = params['city']

    params['days'].each { |day|
      if not day['schedule'].nil?
        day['schedule'].each { |curr_place|
          #check if exist a place in db with same name and google id if not create a new object
          test = PlaceSummary.where(:google_id => curr_place['id'] , :name => curr_place['name'])
          puts 'id and name'
          puts curr_place['id']
          puts curr_place['name']
          if not test.nil?
            puts 'found'
            puts test
          end
          place =  PlaceSummary.where(:google_id => curr_place['id'] , :name => curr_place['name']).first_or_initialize do |place|
            puts 'current place'
            puts curr_place
            place.name = curr_place['name']
            place.lat = curr_place['lat']
            place.lng = curr_place['lng']
            place.rating = curr_place['rating']
            place.price = curr_place['price']
            if not curr_place['photos'].nil?
              place.image = curr_place['photos'][0]['image']
            else
              place.image = 'assets/images/empty_photo.png'
            end



            place.icon = curr_place['icon']
            place.tag = curr_place['tag']
            place.description = curr_place['description']
            place.city = params['city']
            place.google_id = curr_place['id']

            place.save
          end

          guide.place_summaries << place
          guide.guide_place_summaries.last.date = day['day']



        }
      end


    }


    guide.save



    render json:  params
  end

  def new



  end


  def edit
  end

  def show
    id = params['id']
    result = Hash.new
    #get guide from the id passed through params and set result field of guide

    guide = Guide.find_by_id id
    if guide.nil?
      render json: ''
      return
    end

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

  def update
  end

  def destroy
    id = params['id']
    guide = Guide.all
    if guide.nil?
      render json: ''
      return
    end

  end
end
