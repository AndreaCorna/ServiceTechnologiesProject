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
      results = {'culture' => culture}
      $redis.set(city+'_culture',results.to_json)
      return culture
    else
      puts 'redis data'
      puts results
      #to do parse json
      return results
    end


  end

  def get_utility(city)
    get_utility_items(city)
  end

  def get_entertainment(city)
    get_entertainment_items(city)
  end

  def get_hotels(city)
    get_hotels_list(city)
  end

  def hotel_details(id)
    get_hotel_details(id)
  end

end