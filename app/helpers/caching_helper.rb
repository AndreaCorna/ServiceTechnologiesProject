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

=begin
The method returns the data related to the category culture of the city passed as parameter.
Moreover you can specify the token in order to load more items.
=end
  def get_culture(city,token)
    results = []
    if(token.nil?)
      if((results = $redis.get(city+':culture')).nil?)
        culture = get_culture_items(city)
        $redis.set(city+':culture',culture.to_json)
        return culture.to_json
      else
        return results
      end
    else
      if((results = $redis.get(city+':culture:'+token)).nil?)
        culture = get_culture_others(token,city)
        $redis.set(city+':culture:'+token,culture.to_json)
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
        $redis.set(city+':utility',utility.to_json)
        return utility.to_json
      else
        return results
      end
    else
      if((results = $redis.get(city+':utility:'+token)).nil?)
        utility = get_utility_others(token,city)
        $redis.set(city+':utility:'+token,utility.to_json)
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
        $redis.set(city+':entertainment',entertainment.to_json)
        return entertainment.to_json
      else
        return results
      end
    else
      if((results = $redis.get(city+':entertainment:'+token)).nil?)
        entertainment = get_entertainment_others(token,city)
        $redis.set(city+':entertainment:'+token,entertainment.to_json)
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
        $redis.set(city+':food',food.to_json)
        return food.to_json
      else
        return results
      end
    else
      if((results = $redis.get(city+':food:'+token)).nil?)
        food = get_food_others(token,city)
        $redis.set(city+':food:'+token,food.to_json)
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