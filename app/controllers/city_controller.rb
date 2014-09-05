class CityController < ApplicationController
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


end
