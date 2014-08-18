module HotelsHelper

  def get_hotels_list(city)
    puts 'parameter '+city
    #puts hotels(city)
    hotels_list = []
    hotels_list.append(HotelItem.new('215910','lat','long','prova_helper_hotel',3,3,'photo','icon','reference','hotel'))
    return hotels_list

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
    attr_accessor :id,:lat,:lng,:price,:rating,:name,:photo,:icon,:reference,:tag;

    def initialize(id,lat,lng,name,rating,price,photo,icon,reference,tag)
      @id = id;
      @lat = lat;
      @lng = lng;
      @name = name;
      @rating = rating;
      @price = price;
      @photo = photo;
      @icon = icon;
      @reference = reference;
      @tag = tag;
    end

  end

end
