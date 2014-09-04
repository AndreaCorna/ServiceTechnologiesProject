class CityController < ApplicationController
  def index
    city_list = City.all
    render  json:  city_list.to_json
  end

  def show
    details = []
    details.append(City.find(params[:id]))
    puts details.to_json
    render  json:  details.to_json
  end


end
