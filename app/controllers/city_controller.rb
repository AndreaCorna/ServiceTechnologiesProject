class CityController < ApplicationController
  def index
    test = ['Milano','Madrid','New York', 'Amsterdam']
    render  json:  test.to_json
  end



  def show
    test = ['stub city show index ',"city #{params[:city_id]}"]
    render  json:  test.to_json
  end
end
