class CityController < ApplicationController
  include CityHelper
  def index
    city_list = get_list_cities()
    render  json:  city_list.to_json
  end





  def show
    details = get_city_details(params[:id])
    render  json:  details.to_json
  end


end
