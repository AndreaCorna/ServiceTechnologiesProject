require 'net/http'
require 'httparty'
require 'json'
require 'rubygems'
require 'base64'


module PlacesHelper

  module UtilityHelperCity

    def get_utility_items(city)
      client = GooglePlaces::Client.new(ENV['API_KEY'])
      utility_items = client.spots_by_query(city+' airport || atm || bank || bus station || doctor || fire station || hospital || parking || pharmacy || subway station || taxi stand || train station || police',:types => ['airport','atm','bank','bus_station','doctor','fire_station','hospital','parking','pharmacy','police','subway_station','taxi_stand','train_station'],:language => 'en')
      results = []
      utility_items.each { |place|
        photos = []
        if(!place.photos[0].nil?)
          photos.append(:image=>place.photos[0].fetch_url(400))
        end
        description = get_description(place.name)
        results.append(UtilityItem.new(place.lat,place.lng,place.name,place.rating,place.price_level,photos,place.icon,place.place_id,'utility',description))}
      return results

    end

    class UtilityItem
      attr_accessor :id,:lat,:lng,:price,:rating,:name,:photos,:icon,:tag,:description;

      def initialize(lat,lng,name,rating,price,photos,icon,place_id,tag,description)
        @id = place_id
        @lat = lat;
        @lng = lng;
        @name = name;
        @rating = rating
        @price = price;
        @photos = photos;
        @icon = icon;
        @tag = tag;
        @description = description;

      end
    end
  end

  module CultureHelperCity
    include FreebaseHelper
    def get_culture_items(city)
      client = GooglePlaces::Client.new(ENV['API_KEY'])

      culture_items = client.spots_by_query(city+' museum || library || aquarium || art gallery || church',:types => ['library','book_store','museum','aquarium','art_gallery','church'],:language => 'en')
      puts culture_items.to_json
      results = []
      culture_items.each { |place|
        photos = []
        if(!place.photos[0].nil?)
          photos.append(:image=>place.photos[0].fetch_url(400))
        end
        description = get_description(place.name)
        results.append(CultureItem.new(place.lat,place.lng,place.name,place.rating,place.price_level,photos,place.icon,place.place_id,'culture',description))}
      return results

    end

    class CultureItem
      attr_accessor :id,:lat,:lng,:price,:rating,:name,:photos,:icon,:tag,:description;

      def initialize(lat,lng,name,rating,price,photos,icon,place_id,tag,description)
        @id = place_id
        @lat = lat;
        @lng = lng;
        @name = name;
        @rating = rating
        @price = price;
        @photos = photos;
        @icon = icon;
        @tag = tag;
        @description = description;

      end


    end

  end

  module EntertainmentHelperCity

    def get_entertainment_items(city)
      client = GooglePlaces::Client.new(ENV['API_KEY'])
      entertainment_items = client.spots_by_query(city+' amusement_park || casino || gym || zoo || spa || park',:types => ['amusement_park','casino','gym','zoo','spa','park'],:language => 'en')
      results = []
      entertainment_items.each { |place|
        photos = []
        if(!place.photos[0].nil?)
          photos.append(:image=>place.photos[0].fetch_url(400))
        end
        description = get_description(place.name)
        results.append(EntertainmentItem.new(place.lat,place.lng,place.name,place.rating,place.price_level,photos,place.icon,place.place_id,'entertainment',description))}
      return results

    end


    class EntertainmentItem
      attr_accessor :id,:lat,:lng,:price,:rating,:name,:photos,:icon,:tag,:description;

      def initialize(lat,lng,name,rating,price,photos,icon,place_id,tag,description)
        @id = place_id
        @lat = lat;
        @lng = lng;
        @name = name;
        @rating = rating
        @price = price;
        @photos = photos;
        @icon = icon;
        @tag = tag;
        @description = description;

      end
    end

  end

  module FoodHelperCity

    def get_food_items(city)
      client = GooglePlaces::Client.new(ENV['API_KEY'])
      food_items = client.spots_by_query(city+' food || restaurant || cafe || bakery',:types => ['food','restaurant','cafe','bakery'],:language => 'en')
      results = []
      food_items.each { |place|
        photos = []
        if(!place.photos[0].nil?)
          photos.append(:image=>place.photos[0].fetch_url(400))
        end
        description = get_description(place.name)
        results.append(FoodItem.new(place.lat,place.lng,place.name,place.rating,place.price_level,photos,place.icon,place.place_id,'food',description))}
      return results

    end

    class FoodItem
      attr_accessor :id,:lat,:lng,:price,:rating,:name,:photos,:icon,:tag,:description;

      def initialize(lat,lng,name,rating,price,photos,icon,place_id,tag,description)
        @id = place_id
        @lat = lat;
        @lng = lng;
        @name = name;
        @rating = rating
        @price = price;
        @photos = photos;
        @icon = icon;
        @tag = tag;
        @description = description;

      end
    end
  end


  def get_details_item(id)
    details = []
    response = HTTParty.get('https://maps.googleapis.com/maps/api/place/details/json?placeid='+id+'&key='+ENV['API_KEY'])
    json = JSON.parse(response.body)
    #puts json
    lat = json['result']['geometry']['location']['lat']
    lng = json['result']['geometry']['location']['lng']
    reviews = json['result']['reviews']
    formatted_address = json['result']['formatted_address']
    phone = json['result']['international_phone_number']
    name = json['result']['name']
    icon = json['result']['icon']
    web_site = json['result']['website']
    open_hours = json['result']['opening_hours']
    photos = []
    if(!json['result']['photos'].nil?)
      json['result']['photos'].each do |photo|
        url = 'https://maps.googleapis.com/maps/api/place/photo?maxheight=300&maxwidth=300&photoreference='+photo['photo_reference']+'&key='+ENV['API_KEY']
        image_data = Base64.encode64(open(url).read)
        photos.append(:image=>image_data)
      end
    end
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
      @rating = rating
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
