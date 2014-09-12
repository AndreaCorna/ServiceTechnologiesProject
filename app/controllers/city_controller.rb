class CityController < ApplicationController
  include CityHelper
  def index
    city_list = City.all
    render  json:  city_list.to_json
  end

  def show
    details = []
    city = City.find_by_name(params[:id].downcase)
    details.append({:details => city,:images => city.city_images})
    render  json:  details.to_json
  end

  def populate
    json = params[:cities]
    cities = populate_database(json)
    cities.each{ |city|
      if(City.find_by_name(city.name).nil?)
        City.create({:name => city.name,:state => city.state,:lat => city.lat,:lng => city.lng})
        photos = get_images_url(city.lat,city.lng)
        photos.each{ |photo|
          puts '.............................................................................'
          puts photo['photo_file_url']
          CityImage.create({:url =>photo['photo_file_url'],:city_id => city.name})
        }
      end
    }

    render json: cities.to_json
  end



end
