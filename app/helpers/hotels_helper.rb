module HotelsHelper

  def get_hotels_list(city)
    puts 'parameter '+city
    hotels_list = []
    hotels_list.append(HotelItem.new('lat','long','prova_helper_hotel',3,3,'photo','icon','reference'))
    return hotels_list

  end

  def get_hotel_details(id)
    details = []
    details.append('details hotel id '+id)
    return details
  end

  class HotelItem
    attr_accessor :id,:lat,:long,:price,:rating,:name,:photo,:icon,:reference;

    def initialize(lat,long,name,rating,price,photo,icon,reference)
      @id = name+'_'+lat+'_'+long;
      @lat = lat;
      @long = long;
      @name = name;
      @rating = rating;
      @price = price;
      @photo = photo;
      @icon = icon;
      @reference = reference;
    end

  end

end
