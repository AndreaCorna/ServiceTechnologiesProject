class CityController < ApplicationController
  def index
    city_list = City.all
    render  json:  city_list.to_json
  end

  def show
    details = City.find(params[:id])
    render  json:  details.to_json
  end


end
