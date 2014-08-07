module CultureHelper

  def get_culture_items(city)
    puts 'parameter '+city
    culture_items = []
    culture_items.append(CultureItem.new('lat','long','prova_helper',3,3,'photo','icon','reference'))
    return culture_items

  end

  def get_culture_details(id)
    details = []
    details.append('details culture id '+id)
    return details
  end

  class CultureItem
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
