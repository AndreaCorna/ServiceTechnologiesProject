require 'net/http'

module PlacesHelper

  module UtilityHelperCity

    def get_utility_items(city)
      puts 'parameter '+city
      #client = GooglePlaces::Client.new(ENV['API_KEY'])
      #utility_items = client.spots_by_query(city+" utility",:types => ['atm','bank','bus_station','doctor','fire_station','hospital','parking','pharmacy','subway_station','taxi_stand','train_station'],:language => 'en')
      results = []
      #utility_items.each { |place|
        #results.append(UtilityItem.new(place.lat,place.lng,place.name,place.rating,place.price_level,place.photos,place.icon,place.place_id))}
      return results

    end

    def get_utility_details(id)
      details = []
      details.append('details utility id '+id)
      return details
    end


    class UtilityItem
      attr_accessor :id,:lat,:lng,:price,:rating,:name,:photos,:icon;

      def initialize(lat,lng,name,rating,price,photos,icon,place_id)
        @id = place_id
        @lat = lat;
        @lng = lng;
        @name = name;
        @rating = rating.to_i
        @price = price;
        @photos = photos;
        @icon = icon;

      end
    end
  end

  module CultureHelperCity

    def get_culture_items(city)
      puts 'places module'
      puts 'parameter '+city
      client = GooglePlaces::Client.new(ENV['API_KEY'])

      culture_items = client.spots_by_query(city+' culture',:types => ['library','book_store','museum','aquarium','art_gallery'],:language => 'en')
      #culture_items.append(CultureItem.new('lat','long','prova_helper_culture',3,3,'photo','icon','reference'))
      results = []
      culture_items.each { |place|
        results.append(CultureItem.new(place.lat,place.lng,place.name,place.rating,place.price_level,place.photos,place.icon,place.place_id))}
      return results

    end

    def get_culture_details(id)
      details = []
      details.append('details culture id '+id)
      return details
    end

    class CultureItem
      attr_accessor :id,:lat,:lng,:price,:rating,:name,:photos,:icon;

      def initialize(lat,lng,name,rating,price,photos,icon,place_id)
        @id = place_id
        @lat = lat;
        @lng = lng;
        @name = name;
        @rating = rating.to_i
        @price = price;
        @photos = photos;
        @icon = icon;

      end


    end

  end

  module EntertainmentHelperCity

    def get_entertainment_items(city)
      puts 'parameter '+city
      #client = GooglePlaces::Client.new(ENV['API_KEY'])
      #entertainment_items = client.spots_by_query(city+" museum",:types => ['museum'],:language => 'it')
      results = []
      #entertainment_items.each { |place|
        #results.append(EntertainmentItem.new(place.lat,place.lng,place.name,place.rating,place.price_level,place.photos,place.icon,place.place_id))}
      return results


    end

    def get_entertainment_details(id)
      details = []
      details.append('details entertainment id '+id)
      return details
    end


    class EntertainmentItem
      attr_accessor :id,:lat,:lng,:price,:rating,:name,:photos,:icon;

      def initialize(lat,lng,name,rating,price,photos,icon,place_id)
        @id = place_id
        @lat = lat;
        @lng = lng;
        @name = name;
        @rating = rating.to_i
        @price = price;
        @photos = photos;
        @icon = icon;

      end
    end

  end

  require 'httparty'
  require 'json'
  require 'rubygems'

  def get_details_item(id)
    details = []
    response = HTTParty.get('https://maps.googleapis.com/maps/api/place/details/json?placeid='+id+'&key='+ENV['API_KEY'])
    json = JSON.parse(response.body)
    lat = json['result']['geometry']['location']['lat']
    lng = json['result']['geometry']['location']['lng']
    reviews = json['result']['reviews']
    formatted_address = json['result']['formatted_address']
    phone = json['result']['international_phone_number']
    name = json['result']['name']
    icon = json['result']['icon']
    web_site = json['result']['website']
    open_hours = json['result']['opening_hours']
    photos = json['result']['photos']
    rating = json['result']['user_ratings_total']
    details_item = DetailedItem.new(id,lat,lng,name,rating,photos,icon,reviews,formatted_address,web_site,phone,open_hours)
    details.append(details_item)
    return details
  end

  class DetailedItem
    attr_accessor :id,:lat,:lng,:name,:rating,:photos,:icon,:reviews,:formatted_address,:web_site,:international_phone,:open_hours;

    def initialize(place_id,lat,lng,name,rating,photos,icon,reviews,formatted_address,web_site,international_phone,open_hours)
      @id = place_id
      @lat = lat;
      @lng = lng;
      @name = name;
      @rating = rating.to_i
      @photos = photos;
      @icon = icon;
      @reviews = reviews
      @formatted_address = formatted_address
      @web_site = web_site
      @international_phone = international_phone
      @open_hours = open_hours
    end

  end


end
