module CachingHelper

  include PlacesHelper

  def get_item_details(id)

  end

  def get_culture_items(city)
    CultureHelperCity.get_culture_items(city)
  end

  def get_utility_items(city)

  end

  def get_entertainment_items(city)

  end

  def get_hotels_list(city)

  end

  def in_redis?

  end

end