module CachingHelper
  include PlacesHelper
  include PlacesHelper::CultureHelperCity
  include PlacesHelper::UtilityHelperCity
  include PlacesHelper::EntertainmentHelperCity
  include PlacesHelper::FoodHelperCity
  include HotelsHelper

  def get_details(id)
    if((results = $redis.get(id)).nil?)
      puts 'no redis data details'
      details = get_details_item(id)
      $redis.set(id,details.to_json)
      puts $redis.get(id)

      return details.to_json
    else
      puts 'redis data details'
      puts results
      return results
    end
  end

  def get_culture(city,token)
    results=[]
    if(token.nil?)
      if((results = $redis.get(city+':culture')).nil?)
        puts 'no redis data'
        culture = get_culture_items(city)
        $redis.set(city+':culture',culture.to_json)
        #puts culture.to_json
        puts 'redis data culture'
        #puts $redis.get(city+':culture')
        return culture.to_json
      else
        puts 'redis data get after insert'
        #puts results
        return results
      end
    else
      if((results = $redis.get(city+':culture:'+token)).nil?)
        puts 'no redis other data'
        culture = get_culture_others(token,city)
        $redis.set(city+':culture:'+token,culture.to_json)
        return culture.to_json
      else
        puts 'redis data other'
        return results
      end
    end

  end

  def get_utility(city,token)
    results=[]
    if(token.nil?)
      if((results = $redis.get(city+':utility')).nil?)
        puts 'no redis data'
        utility = get_utility_items(city)
        $redis.set(city+':utility',utility.to_json)
        puts utility.to_json
        puts 'redis data culture'
        puts $redis.get(city+':utility')
        return utility.to_json
      else
        puts 'redis data get after insert'
        puts results
        return results
      end
    else
      if((results = $redis.get(city+':utility:'+token)).nil?)
        puts 'no redis other data'
        utility = get_utility_others(token,city)
        $redis.set(city+':utility:'+token,utility.to_json)
        return utility.to_json
      else
        puts 'redis data other'
        return results
      end
    end
  end

  def get_entertainment(city,token)
    results=[]
    if(token.nil?)
      if((results = $redis.get(city+':entertainment')).nil?)
        puts 'no redis data'
        entertainment = get_entertainment_items(city)
        $redis.set(city+':entertainment',entertainment.to_json)
        puts entertainment.to_json
        puts 'redis data culture'
        puts $redis.get(city+':entertainment')
        return entertainment.to_json
      else
        puts 'redis data get after insert'
        puts results
        #to do parse json
        return results
      end
    else
      if((results = $redis.get(city+':entertainment:'+token)).nil?)
        puts 'no redis other data'
        entertainment = get_entertainment_others(token,city)
        $redis.set(city+':entertainment:'+token,entertainment.to_json)
        return entertainment.to_json
      else
        puts 'redis data other'
        return results
      end
    end

  end

  def get_food(city,token)
    results=[]
    if(token.nil?)
      if((results = $redis.get(city+':food')).nil?)
        puts 'no redis data'
        food = get_food_items(city)
        $redis.set(city+':food',food.to_json)
        puts food.to_json
        puts 'redis data culture'
        puts $redis.get(city+':food')
        return food.to_json
      else
        puts 'redis data get after insert'
        puts results
        return results
      end
    else
      if((results = $redis.get(city+':food:'+token)).nil?)
        puts 'no redis other data'
        food = get_food_others(token,city)
        $redis.set(city+':food:'+token,food.to_json)
        return food.to_json
      else
        puts 'redis data other'
        return results
      end
    end
  end

  def get_hotels(city,token)
    results=[]
    puts token
    if(token.nil?)
      if((results = $redis.get(city+':hotel')).nil?)
        puts 'no redis data'
        hotel = get_hotels_list(city)
        return hotel
      else
        puts 'redis data get after insert'
        #puts results
        return results
      end
    else

      results = $redis.get(city+':hotel:'+token)
      puts results
      return results
      end
  end



  def hotel_details(id)
    results=[]
    if((results = $redis.get(id)).nil?)
      details = get_hotel_details(id)
      $redis.set(id,details.to_json)
      return details.to_json
    else
      return results
    end
  end

end