class CityController < ApplicationController
  def index
    city1 = City.new('Milan','Italy','image')
    city2 = City.new('Madrid','Spain','image')
    city3 = City.new('New York','States','image')
    city4 = City.new('Amsterdam','Holland','image')
    city5 = City.new('Mosca','Russia','image')
    city6 = City.new('Berlin','Germany','image')
    test = [city1,city2,city3,city4,city5,city6]
    render  json:  test.to_json
  end

  class City
    def initialize(name,state,image)
      @name = name
      @state = state
      @image = image
    end
  end



  def show
    test = ['stub city show index ',"city #{params[:city_id]}"]
    render  json:  test.to_json
  end
end
