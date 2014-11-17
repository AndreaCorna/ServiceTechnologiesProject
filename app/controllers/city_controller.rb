class CityController < ApplicationController
  include CityHelper
=begin
The method returns the list of all cities contained in the database
=end
  def index
    city_list = City.all
    puts city_list.inspect

    render  json:  city_list.to_json
  end

=begin
The method returns the details of the city passed as parameter in the url.
=end
  def show
    details = []

    param_city =params[:id].downcase
    city = City.find_by_name(param_city)
    puts city_culture_path(:city_id=>param_city).gsub(/\/[^\/]*$/,'')   #trick because not having decleared the route as plurals I don't have the helper method for the index
    link_culture = city_culture_url(:city_id=>param_city).gsub(/\/[^\/]*$/,'')
    link_entertainment = city_entertainment_url(:city_id=>param_city).gsub(/\/[^\/]*$/,'')
    link_food = city_food_url(:city_id=>param_city).gsub(/\/[^\/]*$/,'')
    link_hotel = city_hotel_url(:city_id=>param_city).gsub(/\/[^\/]*$/,'')
    link_utility =city_utility_url(:city_id=>param_city).gsub(/\/[^\/]*$/,'')
    images = nil
    if city.nil?
      detail = {:name => param_city}
      details.append({:details => detail,:images => [],
                      :link_culture =>link_culture,:link_entertainment => link_entertainment ,
                      :link_food => link_food,:link_hotel =>link_hotel,:link_utility =>link_utility})
    else
      details.append({:details => city,:images => images,
                      :link_culture =>link_culture,:link_entertainment => link_entertainment ,
                      :link_food => link_food,:link_hotel =>link_hotel,:link_utility =>link_utility})
    end

    render  json:  details.to_json
  end

=begin
This method must be used to add cities to the database using as url
<ip server>/populate?json=['city','city2']
=end
  def populate
    json = params[:cities]
    cities = populate_database(json)
    cities.each{ |city|
      if(City.find_by_name(city.name).nil?)
        City.create({:name => city.name,:state => city.state,:lat => city.lat,:lng => city.lng,:link => city_url(city.name)})
        photos = get_images_url(city.lat,city.lng)
        photos.each{ |photo|
          #url_photo = photo['photo_file_url'].sub! 'http', 'https'
          CityImage.create({:url =>photo['photo_file_url'],:city_id => city.name})
        }
      end
    }
    render json: cities.to_json
  end



end
