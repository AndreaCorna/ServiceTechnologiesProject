require 'numbers_and_words'
require 'base64'
require 'net/http'
require 'httparty'
require 'timeout'

module HotelsHelper

=begin
The method returns the entire list of hotels nearby in the city passed as
parameter.
The result is an object with two elements:
-results → contains the list of almost 20 items;
-token → contains the token to be used to load more result.
=end
  def get_hotels_list(city)
    json = hotels(city)
    hotels_list = []
    count = 0
    first = true
    tag = 0
    json['HotelListResponse']['HotelList']['HotelSummary'].each do |hotel|
      address = hotel['address1']+' '+hotel['city']
      photos = []
      url = 'http://images.travelnow.com'+hotel['thumbNailUrl']
      photos.append(:image=>url)
      description = parse_description(hotel['shortDescription'])
      hotels_list.append(HotelItem.new(hotel['hotelId'],hotel['latitude'],hotel['longitude'],hotel['name'],hotel['hotelRating'],address,photos,'','hotel',description))
      count = count + 1
      if(count == 20)
        count = 0
        next_tag = tag+1
        json_list = []
        json_list.append({:results=>hotels_list,:token=>next_tag.to_words})
        if(first)
          $redis.set(city+':hotel',json_list.to_json)
          first = false
        else
          to_add = tag.to_words
          $redis.set(city+':hotel:'+to_add,json_list.to_json)
        end
        hotels_list.clear
        tag = tag + 1
      end
    end
    return  $redis.get(city+':hotel')

  end

=begin
The method returns the details of the hotel identified with the id.
=end
  def get_hotel_details(id)
    api = Expedia::Api.new
    response = api.get_information({ :hotelId => id})
    hotel = response.body['HotelInformationResponse']['HotelSummary']
    hotel_id = hotel['hotelId']
    name = hotel['name']
    address = hotel['address1']+' '+hotel['city']
    rating = hotel['tripAdvisorRatingUrl']
    lat = hotel['latitude']
    lng = hotel['longitude']
    info = eliminate_tags(response.body['HotelInformationResponse']['HotelDetails']['propertyInformation'])
    policy = eliminate_tags(response.body['HotelInformationResponse']['HotelDetails']['hotelPolicy'])
    descr = parse_description(response.body['HotelInformationResponse']['HotelDetails']['propertyDescription'])
    photos = []
    if(!response.body['HotelInformationResponse']['HotelImages']['HotelImage'].nil?)
      count = 0
      threads = []
      response.body['HotelInformationResponse']['HotelImages']['HotelImage'].each do |photo|
        count = count + 1
        threads << Thread.new {
          url = photo['url']
          image_data = Base64.encode64(open(url).read)
          photos.append(:image=>image_data)
        }
        if(count == 5)
          break
        end
      end
      threads.each do |thread|
        thread.join
      end
    end
    hotel_details = HotelDetails.new(hotel_id,name,address,rating,lat,lng,descr,info,policy,photos)
    return hotel_details
  end

=begin
The methods returns the list of hotels.
=end
  private
  def hotels(city)
    data = nil
    status = Timeout::timeout(30) {
      api = Expedia::Api.new
      data = api.get_list({ :destinationString => city})
    }

    return data.body
  end

=begin
The method returns the string passed as parameter purified by all html tags and
unnecessary parts.
=end
  private
  def parse_description(description)
    descr = eliminate_tags(description)
    value, match, suffix = descr.rpartition('.')
    value.slice! 'Property Location '
    return value+'.'

  end

=begin
The method returns the string passed as parameter purified by all html tags.
=end
  private
  def eliminate_tags(string)
    output = Nokogiri::HTML.fragment(string)
    return output.text.gsub(/<[^>]*>/ui,'')
  end

  class HotelItem
    attr_accessor :id,:lat,:lng,:price,:rating,:name,:photos,:icon,:tag,:description;

    def initialize(id,lat,lng,name,rating,address,photo,icon,tag,description)
      @id = id;
      @lat = lat;
      @lng = lng;
      @name = name;
      @rating = rating;
      @address = address;
      @photos = photo;
      @icon = icon;
      @tag = tag;
      @description = description;
    end

  end

  class HotelDetails
    attr_accessor :id,:name,:address,:rating,:lat,:lng,:description,:info,:policy,:photos

    def initialize(id,name,address,rating,lat,lng,description,info,policy,photos)
      @id = id;
      @name = name;
      @address = address;
      @rating = rating;
      @lat = lat;
      @lng = lng;
      @description = description;
      @info = info;
      @policy = policy;
      @photos = photos;
    end

  end

end
