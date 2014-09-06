require 'wikipedia'
module FreebaseHelper

  def get_description(name,city)
    FreebaseAPI.session = FreebaseAPI::Session.new(key: ENV['API_KEY'], env: :stable)

    results = FreebaseAPI::Topic.search(name+' in '+city)
    best_match = results.values.first
    if(!best_match.nil?)
      best_match.sync
      description = best_match.description
      if(description.nil?)
          #page = Wikipedia.find('Ruby on rails')
          #puts page.raw_data
      end
    end
    return description
  end

end