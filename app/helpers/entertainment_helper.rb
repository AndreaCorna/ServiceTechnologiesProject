module EntertainmentHelper

  def get_entertainment_items(city)
    puts 'parameter '+city
    entertainment_items = []
    entertainment_items.append(EntertainmentItem.new('lat','long','prova_helper_entertainment',3,3,'photo','icon','reference'))
    return entertainment_items

  end

  def get_entertainment_details(id)
    details = []
    details.append('details entertainment id '+id)
    return details
  end


  class EntertainmentItem
    attr_accessor :id,:lat,:long,:price,:rating,:name,:photo,:icon,:reference;

    def initialize(lat,long,name,rating,price,photo,icon,reference)
      @id = name+lat+long;
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
