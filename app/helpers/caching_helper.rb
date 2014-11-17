module CachingHelper
  include PlacesHelper
  include PlacesHelper::CultureHelperCity
  include PlacesHelper::UtilityHelperCity
  include PlacesHelper::EntertainmentHelperCity
  include PlacesHelper::FoodHelperCity
  include HotelsHelper

=begin
The method returns the details of the item identified by the id.
Before checks if the information are already in redis cache, otherwise asks to
google places to give them.
=end
  def get_details(id)
    if((results = $redis.get(id)).nil?)
      details = get_details_item(id)
      $redis.set(id,details.to_json)
      return details.to_json
    else
      return results
    end
  end

  def get_coordinates(city)
    location = City.find_by_name(city)
    if location.nil?
      location = Geocoder.search(city)
      begin
        lat = location[0].latitude
        lng = location[0].longitude
      rescue NoMethodError
        return nil,nil
      end

    else
      lat = location.lat
      lng = location.lng
    end
    return lat,lng


  end

=begin
The method returns the data related to the category culture of the city passed as parameter.
Moreover you can specify the token in order to load more items.
=end
  def get_culture(city,token)
    results = []
    lat,lng = get_coordinates(city)
    if  lat.nil? or lng.nil?
      return [].to_json
    end
    if(token.nil?)
      if((results = $redis.get(lat.to_s+':'+lng.to_s+':culture')).nil?)
        culture = get_culture_items(city,lat,lng)
        if(culture[0][:results] != nil)
          $redis.set(lat.to_s+':'+lng.to_s+':culture',culture.to_json)
        end
        return culture.to_json
      else
        return results
      end
    else
      if((results = $redis.get(lat.to_s+':'+lng.to_s+':culture'+token)).nil?)
        culture = get_culture_others(token,city)
        if(culture[0][:results] != nil)
          $redis.set(lat.to_s+':'+lng.to_s+':culture'+token,culture.to_json)
        end
        return culture.to_json
      else
        return results
      end
    end

  end

=begin
The method returns the data related to the category utility of the city passed as parameter.
Moreover you can specify the token in order to load more items.
=end
  def get_utility(city,token)
    results = []
    if(token.nil?)
      if((results = $redis.get(city+':utility')).nil?)
        utility = get_utility_items(city)
        if(utility[0][:results] != nil)
          $redis.set(city+':utility',utility.to_json)
        end
        return utility.to_json
      else
        return results
      end
    else
      if((results = $redis.get(city+':utility:'+token)).nil?)
        utility = get_utility_others(token,city)
        if(utility[0][:results] != nil)
          $redis.set(city+':utility:'+token,utility.to_json)
        end
        return utility.to_json
      else
        return results
      end
    end
  end

=begin
The method returns the data related to the category entertainment of the city passed as parameter.
Moreover you can specify the token in order to load more items.
=end
  def get_entertainment(city,token)
    results = []
    if(token.nil?)
      if((results = $redis.get(city+':entertainment')).nil?)
        entertainment = get_entertainment_items(city)
        if(entertainment[0][:results] != nil)
          $redis.set(city+':entertainment',entertainment.to_json)
        end
        return entertainment.to_json
      else
        return results
      end
    else
      if((results = $redis.get(city+':entertainment:'+token)).nil?)
        entertainment = get_entertainment_others(token,city)
        if(entertainment[0][:results] != nil)
          $redis.set(city+':entertainment:'+token,entertainment.to_json)
        end
        return entertainment.to_json
      else
        return results
      end
    end

  end

=begin
The method returns the data related to the category food of the city passed as parameter.
Moreover you can specify the token in order to load more items.
=end
  def get_food(city,token)
    results = []
    if(token.nil?)
      if((results = $redis.get(city+':food')).nil?)
        food = get_food_items(city)
        puts food[0][:results]
        if(food[0][:results].length != 0)
          $redis.set(city+':food',food.to_json)
        end
        return food.to_json
      else
        return results
      end
    else
      if((results = $redis.get(city+':food:'+token)).nil?)
        food = get_food_others(token,city)
        if(food[0][:results].length != 0)
          $redis.set(city+':food:'+token,food.to_json)
        end
        return food.to_json
      else
        return results
      end
    end
  end

=begin
The method returns the data related to the category hotel of the city passed as parameter.
Moreover you can specify the token in order to load more items.
=end
  def get_hotels(city,token)
    results = []
    if(token.nil?)
      if((results = $redis.get(city+':hotel')).nil?)
        hotel = get_hotels_list(city)
        return hotel
      else
        return results
      end
    else
      results = $redis.get(city+':hotel:'+token)
      return results
      end
  end

=begin
The method returns the details of the hotel identified by the id.
Before checks if the information are already in redis cache, otherwise asks to
expedia to give them.
=end
  def hotel_details(id)
    results = []
    if((results = $redis.get(id)).nil?)
      details = get_hotel_details(id)
      $redis.set(id,details.to_json)
      return details.to_json
    else
      return results
    end
  end

end