module UtilityHelper

  def get_utility_items(city)
    puts 'parameter '+city
    utility_items = []
    utility_items.append(UtilityItem.new('lat','long','prova_helper_utility',3,3,'photo','icon','reference'))
    return utility_items

  end

  def get_utility_details(id)
    details = []
    details.append('details utility id '+id)
    return details
  end


  class UtilityItem
    attr_accessor :id,:lat,:long,:price,:rating,:name,:photo,:icon,:reference;

    def initialize(lat,lng,name,rating,price,photo,icon,reference)
      @id = name+'_'+lat+'_'+lng;
      @lat = lat;
      @lng = lng;
      @name = name;
      @rating = rating;
      @price = price;
      @photo = photo;
      @icon = icon;
      @reference = reference;
    end

  end
end
