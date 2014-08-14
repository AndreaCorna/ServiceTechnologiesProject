module PlacesHelper

  module UtilityHelperCity

    def get_utility_items(city)
      puts 'parameter '+city
      client = GooglePlaces::Client.new(ENV['API_KEY'])
      utility_items = client.spots_by_query(city+" museum",:types => ['museum'],:language => 'it')
      #culture_items.append(CultureItem.new('lat','long','prova_helper_culture',3,3,'photo','icon','reference'))
      results = []
      utility_items.each { |place|
        results.append(CultureItem.new(place.lat,place.lng,place.name,place.rating,place.price_level,place.photos,place.icon,place.place_id))}
      return results

    end

    def get_utility_details(id)
      details = []
      details.append('details utility id '+id)
      return details
    end


    class UtilityItem
      attr_accessor :id,:lat,:lng,:price,:rating,:name,:photos,:icon,:place_id;

      def initialize(lat,lng,name,rating,price,photos,icon,place_id)
        @id = place_id
        @lat = lat;
        @lng = lng;
        @name = name;
        @rating = rating;
        @price = price;
        @photos = photos;
        @icon = icon;

      end
    end
  end

  module CultureHelperCity

    def get_culture_items(city)
      puts 'places module'
      puts 'parameter '+city
      client = GooglePlaces::Client.new(ENV['API_KEY'])

      culture_items = client.spots_by_query(city+" museum",:types => ['museum'],:language => 'it')
      #culture_items.append(CultureItem.new('lat','long','prova_helper_culture',3,3,'photo','icon','reference'))
      results = []
      culture_items.each { |place|
        results.append(CultureItem.new(place.lat,place.lng,place.name,place.rating,place.price_level,place.photos,place.icon,place.place_id))}
      return results

    end

    def get_culture_details(id)
      details = []
      details.append('details culture id '+id)
      return details
    end

    class CultureItem
      attr_accessor :id,:lat,:lng,:price,:rating,:name,:photos,:icon,:place_id;

      def initialize(lat,lng,name,rating,price,photos,icon,place_id)
        @id = place_id
        @lat = lat;
        @lng = lng;
        @name = name;
        @rating = rating;
        @price = price;
        @photos = photos;
        @icon = icon;

      end


    end

  end

  module EntertainmentHelperCity

    def get_entertainment_items(city)
      puts 'parameter '+city
      client = GooglePlaces::Client.new(ENV['API_KEY'])
      entertainment_items = client.spots_by_query(city+" museum",:types => ['museum'],:language => 'it')
      results = []
      entertainment_items.each { |place|
        results.append(CultureItem.new(place.lat,place.lng,place.name,place.rating,place.price_level,place.photos,place.icon,place.place_id))}
      return results


    end

    def get_entertainment_details(id)
      details = []
      details.append('details entertainment id '+id)
      return details
    end


    class EntertainmentItem
      attr_accessor :id,:lat,:lng,:price,:rating,:name,:photos,:icon,:place_id;

      def initialize(lat,lng,name,rating,price,photos,icon,place_id)
        @id = place_id
        @lat = lat;
        @lng = lng;
        @name = name;
        @rating = rating;
        @price = price;
        @photos = photos;
        @icon = icon;

      end
    end

  end

  def get_details_item(id)
    details = []
    details.append('details general id '+id)
    return details
  end

end
