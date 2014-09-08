require 'numbers_and_words'

module HotelsHelper

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
      hotels_list.append(HotelItem.new(hotel['hotelId'],hotel['latitudine'],hotel['longitudine'],hotel['name'],hotel['hotelRating'],address,photos,'','hotel',description))
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

  def get_hotel_details(id)
    details = []
    api = Expedia::Api.new
    response = api.get_information({ :hotelId => id})
    puts response.body
    #to parse
    details.append('details hotel id '+id)
    return details
  end

  def hotels(city)
    api = Expedia::Api.new
    response = api.get_list({ :destinationString => city})
    return response.body
  end

  def parse_description(description)
    output = Nokogiri::HTML.fragment(description)
    descr = output.text.gsub(/<[^>]*>/ui,'')
    value, match, suffix = descr.rpartition('.')
    value.slice! 'Property Location '
    return value+'.'

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

end
