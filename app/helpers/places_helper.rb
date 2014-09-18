require 'net/http'
require 'httparty'
require 'json'
require 'rubygems'
require 'base64'


module PlacesHelper

  module UtilityHelperCity

    def get_utility_items(city)
      client = GooglePlaces::Client.new(ENV['API_KEY'])
      location = City.find_by_name(city)
      lat = location.lat
      lng = location.lng
      utility_items= client.spots(lat,lng,:types => ['airport','atm','bank','bus_station','doctor','fire_station','hospital','parking','pharmacy','police','subway_station','taxi_stand','train_station'],:radius => 20000)
      results = []
      next_page_token = nil
      threads = []
      semaphore = Mutex.new

      utility_items.each { |place|
        threads << Thread.new {
          semaphore.synchronize{
            if(!place.nextpagetoken.nil?)
              next_page_token = place.nextpagetoken
            end
          }
          photos = []
          if(!place.photos[0].nil?)
            photos.append(:image=>place.photos[0].fetch_url(400))
          end
          description = get_description(place.name,city)
          results.append(UtilityItem.new(place.lat,place.lng,place.name,place.rating,place.price_level,photos,place.icon,place.place_id,'utility',description))}
      }
      threads.each do |thread|
        thread.join
      end
      json = []
      json.append({:results=>results,:token=>next_page_token})
      return json

    end

    def get_utility_others(token,city)
      client = GooglePlaces::Client.new(ENV['API_KEY'])
      utility_items= client.spots_by_pagetoken(token)
      results = []
      next_page_token = nil
      threads = []
      semaphore = Mutex.new
      utility_items.each { |place|
        threads << Thread.new{
          semaphore.synchronize{
            if(!place.nextpagetoken.nil?)
              next_page_token = place.nextpagetoken
            end
          }
          photos = []
          if(!place.photos[0].nil?)
            photos.append(:image=>place.photos[0].fetch_url(400))
          end
          description = get_description(place.name,city)
          results.append(UtilityItem.new(place.lat,place.lng,place.name,place.rating,place.price_level,photos,place.icon,place.place_id,'utility',description))}
      }
      threads.each do |thread|
        thread.join
      end
      json = []
      json.append({:results=>results,:token=>next_page_token})
      return json

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
      location = City.find_by_name(city)
      lat = location.lat
      lng = location.lng
      culture_items= client.spots(lat,lng,:types => ['library','book_store','museum','aquarium','art_gallery','church'],:radius => 20000)
      results = []
      next_page_token = nil
      threads = []
      semaphore = Mutex.new

      culture_items.each { |place|
        threads << Thread.new{
          semaphore.synchronize{
            if(!place.nextpagetoken.nil?)
              next_page_token = place.nextpagetoken
            end
          }
          photos = []
          if(!place.photos[0].nil?)
            photos.append(:image=>place.photos[0].fetch_url(400))
          end
          description = get_description(place.name,city)
          results.append(CultureItem.new(place.lat,place.lng,place.name,place.rating,place.price_level,photos,place.icon,place.place_id,'culture',description))}
      }
      threads.each do |thread|
        thread.join
      end
      json = []
      json.append({:results=>results,:token=>next_page_token})
      return json

    end

    def get_culture_others(token,city)
      client = GooglePlaces::Client.new(ENV['API_KEY'])
      culture_items= client.spots_by_pagetoken(token)
      results = []
      next_page_token = nil
      threads = []
      semaphore = Mutex.new

      culture_items.each { |place|
        threads << Thread.new {
          semaphore.synchronize{
            if(!place.nextpagetoken.nil?)
              next_page_token = place.nextpagetoken
            end
          }
          photos = []
          if(!place.photos[0].nil?)
            photos.append(:image=>place.photos[0].fetch_url(400))
          end
          description = get_description(place.name,city)
          results.append(CultureItem.new(place.lat,place.lng,place.name,place.rating,place.price_level,photos,place.icon,place.place_id,'culture',description))}
      }
      threads.each do |thread|
        thread.join
      end
      json = []
      json.append({:results=>results,:token=>next_page_token})
      return json
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
      location = City.find_by_name(city)
      lat = location.lat
      lng = location.lng
      entertainment_items= client.spots(lat,lng,:types => ['amusement_park','casino','gym','zoo','spa','park'],:radius => 20000)
      next_page_token = nil
      results = []
      threads = []
      semaphore = Mutex.new

      entertainment_items.each { |place|
        threads << Thread.new {
          semaphore.synchronize{
            if(!place.nextpagetoken.nil?)
              next_page_token = place.nextpagetoken
            end
          }
          photos = []
          if(!place.photos[0].nil?)
            photos.append(:image=>place.photos[0].fetch_url(400))
          end
          description = get_description(place.name,city)
          results.append(EntertainmentItem.new(place.lat,place.lng,place.name,place.rating,place.price_level,photos,place.icon,place.place_id,'entertainment',description))}
      }
      threads.each do |thread|
        thread.join
      end
      json = []
      json.append({:results=>results,:token=>next_page_token})
      return json

    end

    def get_entertainment_others(token,city)
      client = GooglePlaces::Client.new(ENV['API_KEY'])
      entertainment_items= client.spots_by_pagetoken(token)
      results = []
      next_page_token = nil
      threads = []
      semaphore = Mutex.new

      entertainment_items.each { |place|
        threads << Thread.new {
          semaphore.synchronize{
            if(!place.nextpagetoken.nil?)
              next_page_token = place.nextpagetoken
            end
          }
          photos = []
          if(!place.photos[0].nil?)
            photos.append(:image=>place.photos[0].fetch_url(400))
          end
          description = get_description(place.name,city)
          results.append(EntertainmentItem.new(place.lat,place.lng,place.name,place.rating,place.price_level,photos,place.icon,place.place_id,'entertainment',description))}
      }
      threads.each do |thread|
        thread.join
      end
      json = []
      json.append({:results=>results,:token=>next_page_token})
      return json
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
      location = City.find_by_name(city)
      lat = location.lat
      lng = location.lng
      food_items = client.spots(lat,lng,:types => ['food','restaurant','cafe','bakery'],:radius => 20000)
      results = []
      next_page_token = nil
      threads = []
      semaphore = Mutex.new

      food_items.each { |place|
        threads << Thread.new {
          semaphore.synchronize{
            if(!place.nextpagetoken.nil?)
              next_page_token = place.nextpagetoken
            end
          }
          photos = []
          if(!place.photos[0].nil?)
            photos.append(:image=>place.photos[0].fetch_url(400))
          end
          description = get_description(place.name,city)
          results.append(FoodItem.new(place.lat,place.lng,place.name,place.rating,place.price_level,photos,place.icon,place.place_id,'food',description))}
      }
      threads.each do |thread|
        thread.join
      end
      json = []
      json.append({:results=>results,:token=>next_page_token})
      return json

    end

    def get_food_others(token,city)
      client = GooglePlaces::Client.new(ENV['API_KEY'])
      food_items= client.spots_by_pagetoken(token)
      results = []
      next_page_token = nil
      threads = []
      semaphore = Mutex.new

      food_items.each { |place|
        threads << Thread.new {
          semaphore.synchronize{
            if(!place.nextpagetoken.nil?)
              next_page_token = place.nextpagetoken
            end
          }
          photos = []
          if(!place.photos[0].nil?)
            photos.append(:image=>place.photos[0].fetch_url(400))
          end
          description = get_description(place.name,city)
          results.append(FoodItem.new(place.lat,place.lng,place.name,place.rating,place.price_level,photos,place.icon,place.place_id,'food',description))}
      }
      threads.each do |thread|
        thread.join
      end
      json = []
      json.append({:results=>results,:token=>next_page_token})
      return json
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
    open_hours = parse_open_hours(json['result']['opening_hours']['periods'])
    photos = []
    if(!json['result']['photos'].nil?)
      threads = []
      json['result']['photos'].each do |photo|
        threads << Thread.new {
          url = 'https://maps.googleapis.com/maps/api/place/photo?maxheight=300&maxwidth=300&photoreference='+photo['photo_reference']+'&key='+ENV['API_KEY']
          image_data = Base64.encode64(open(url).read)
          photos.append(:image=>image_data)
        }
      end
      threads.each do |thread|
        thread.join
      end
    end
    rating = json['result']['user_ratings_total']
    details_item = DetailedItem.new(id,lat,lng,name,rating,photos,icon,reviews,formatted_address,web_site,phone,open_hours)
    return details_item
  end

  def parse_open_hours(data)
    open_hours = Array.new(7)
    open_hours.each do |object|
      object = nil
    end
    if(!data.nil?)
      data.each do |couple|
        day = couple['close']['day']
        if(open_hours[day].nil?)
          time = []
          time.append({:open => couple['open']['time'],:close => couple['close']['time'] })
          open_hours[day] = {:day => day, :hours => time}
        else
          hash = {:open => couple['open']['time'],:close => couple['close']['time']}
          open_hours[day]['hours'.to_sym].append(hash)
        end
      end
    end
    return open_hours
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
