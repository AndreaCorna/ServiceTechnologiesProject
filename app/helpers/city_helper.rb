require 'net/http'
require 'httparty'
module CityHelper

   def populate_database(cities)
    results = []
    response = JSON.parse(cities)
    response.each do |city|
        location = Geocoder.search(city)
        lat = location[0].latitude
        lng = location[0].longitude
        country = location[0].country
        item = CityItem.new(city.downcase,country,lat,lng)
        results.append(item)
    end
    return results

  end

  def get_images_url(lat,lng)
    photos = []
    latitude = (lat+0.01).to_s
    longitude =(lng+0.01).to_s
    url = 'http://www.panoramio.com/map/get_panoramas.php?set=public&from=0&to=4&minx='+lng.to_s+'&miny='+lat.to_s+'&maxx='+longitude+'&maxy='+latitude+'&size=medium&mapfilter=true'
    response = HTTParty.get(url)
    json = JSON.parse(response.body)
    json['photos'].each do |photo|
      photos.append(photo)
    end
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
