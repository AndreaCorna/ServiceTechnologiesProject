module PlacesHelper

  module UtilityHelperCity

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

  module CultureHelperCity

    def get_culture_items(city)
      puts 'places module'
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

  module EntertainmentHelperCity

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

  def get_details_item(id)
    details = []
    details.append('details general id '+id)
    return details
  end

  def culture(city)
    client = GooglePlaces::Client.new(ENV['API_KEY'])
    result =client.spots_by_query(city+" museum",:types => ['museum'],:language => 'en')
  end

  def utility(city)
    client = GooglePlaces::Client.new(ENV['API_KEY'])
    result =client.spots_by_query(city+" museum",:types => ['museum'],:language => 'en')
  end

  def entertainment(city)
    client = GooglePlaces::Client.new(ENV['API_KEY'])
    result =client.spots_by_query(city+" museum",:types => ['museum'],:language => 'en')
  end

end
