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
      descr = hotel['shortDescription'].strip_tags
      output = Nokogiri::HTML.fragment(descr)
      hotels_list.append(HotelItem.new(hotel['hotelId'],hotel['latitudine'],hotel['longitudine'],hotel['name'],hotel['hotelRating'],address,photos,'','hotel',output.text))
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

    # Method to search for a hotel. see http://developer.ean.com/docs/hotel-list/
    # Per mandare alla pagina di expedia 84505 è il CID che definisce il template 147594 indica invece l'hotel
    # http://www.travelnow.com/templates/55505/hotels/147594/overview
    response = api.get_list({ :destinationString => city})

    return response.body
  end

  #add methods in order to use expedia api

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
