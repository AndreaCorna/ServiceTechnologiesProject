class CityController < ApplicationController
  include CityHelper
  def index
    city_list = City.all
    render  json:  city_list.to_json
  end

  def show
    details = []
    city = City.find(params[:id])
    details.append({:details => city,:images => city.city_images})
    puts details.to_json
    render  json:  details.to_json
  end

  def populate
    json = params[:cities]
    puts json.to_json
    cities = populate_database(json)
    cities.each{ |city|
      puts city.name
      City.create({:name => city.name,:state => city.state,:lat => city.lat,:lng => city.lng})
      photos = get_images_url(city.lat,city.lng)
      photos.each{ |photo|
        puts '.............................................................................'
        puts photo['photo_file_url']
        CityImage.create({:url =>photo['photo_file_url'],:city_id => city.name})
      }
    }

    render json: cities.to_json
  end



end
