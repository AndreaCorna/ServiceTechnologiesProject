module CultureHelper

  def get_culture_items(city)
    puts 'parameter '+city
    #client = GooglePlaces::Client.new(ENV['API_KEY'])
    culture_items = []
    #culture_items.append(client.spots_by_query(city+" museum",:types => ['museum'],:language => 'it'))
    culture_items.append(CultureItem.new('lat','long','prova_helper_culture',3,3,'photo','icon','reference'))
    #$redis.set(city,culture_items);
    return culture_items

  end

  def get_culture_details(id)
    details = []
    details.append('details culture id '+id)
    return details
  end

  class CultureItem
    attr_accessor :id,:lat,:lng,:price,:rating,:name,:photo,:icon,:reference;

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
