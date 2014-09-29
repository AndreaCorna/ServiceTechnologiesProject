class CityController < ApplicationController
  include CityHelper
=begin
The method returns the list of all cities contained in the database
=end
  def index
    city_list = City.all
    render  json:  city_list.to_json
  end

=begin
The method returns the details of the city passed as parameter in the url.
=end
  def show
    details = []
    city = City.find_by_name(params[:id].downcase)
    details.append({:details => city,:images => city.city_images})
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
        City.create({:name => city.name,:state => city.state,:lat => city.lat,:lng => city.lng})
        photos = get_images_url(city.lat,city.lng)
        photos.each{ |photo|
          CityImage.create({:url =>photo['photo_file_url'],:city_id => city.name})
        }
      end
    }

    render json: cities.to_json
  end



end
