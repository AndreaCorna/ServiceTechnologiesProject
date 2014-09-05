module CityHelper

  def populate_database(cities)
    results = []
    ajs=  JSON.parse(cities)
    ajs.each do |city|
        location = Geocoder.search(city)
        lat = location[0].latitude
        lng = location[0].longitude
        country = location[0].country
        item = CityItem.new(city,country,lat,lng)
        puts item.to_json
        results.append(item)
    end
    return results

  end



  class CityItem
    attr_accessor :name,:lat,:lng,:state;

    def initialize(name,state,lat,lng)
      @name = name
      @state = state
      @lat = lat;
      @lng = lng;
    end
  end




end
