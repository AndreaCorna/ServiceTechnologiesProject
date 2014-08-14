module CachingHelper
  include PlacesHelper
  include PlacesHelper::CultureHelperCity
  include PlacesHelper::UtilityHelperCity
  include PlacesHelper::EntertainmentHelperCity
  include HotelsHelper

  def get_details(type,id)
    #add control if present in redis
    get_details_item(id)
  end

  def get_culture(city)
    results=[]
    if((results = $redis.get(city+'_culture')).nil?)
      puts 'no redis data'
      culture = get_culture_items(city)
      $redis.set(city+'_culture',culture.to_json)
      puts culture.to_json
      puts 'redis data culture'
      puts $redis.get(city+'_culture')
      return culture.to_json
    else
      puts 'redis data get after insert'
      puts $redis.get(city+'_culture')
      #to do parse json
      return $redis.get(city+'_culture')
    end


  end

  def get_utility(city)
    results=[]
    if((results = $redis.get(city+'_utility')).nil?)
      puts 'no redis data'
      utility = get_utility_items(city)
      $redis.set(city+'_utility',utility.to_json)
      puts utility.to_json
      puts 'redis data culture'
      puts $redis.get(city+'_utility')
      return utility.to_json
    else
      puts 'redis data get after insert'
      puts $redis.get(city+'_utility')
      #to do parse json
      return $redis.get(city+'_utility')
    end
  end

  def get_entertainment(city)
    results=[]
    if((results = $redis.get(city+'_entertainment')).nil?)
      puts 'no redis data'
      entertainment = get_entertainment_items(city)
      $redis.set(city+'_entertainment',entertainment.to_json)
      puts entertainment.to_json
      puts 'redis data culture'
      puts $redis.get(city+'_entertainment')
      return entertainment.to_json
    else
      puts 'redis data get after insert'
      puts $redis.get(city+'_entertainment')
      #to do parse json
      return $redis.get(city+'_entertainment')
    end
  end

  def get_hotels(city)
    results=[]
    if((results = $redis.get(city+'_hotel')).nil?)
      puts 'no redis data'
      hotel = get_hotels_list(city)
      $redis.set(city+'_hotel',hotel.to_json)
      puts hotel.to_json
      puts 'redis data culture'
      puts $redis.get(city+'_hotel')
      return hotel.to_json
    else
      puts 'redis data get after insert'
      puts $redis.get(city+'_hotel')
      #to do parse json
      return $redis.get(city+'_hotel')
    end
  end

  def hotel_details(id)
    get_hotel_details(id)
  end

end