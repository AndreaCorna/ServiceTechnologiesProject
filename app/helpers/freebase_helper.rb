module FreebaseHelper
  include WikipediaHelper
  def get_description(name,city)
    FreebaseAPI.session = FreebaseAPI::Session.new(key: ENV['API_KEY'], env: :stable)

    results = FreebaseAPI::Topic.search(name+' in '+city)
    best_match = results.values.first
    if(!best_match.nil?)
      best_match.sync
      description = best_match.description
      if(description.nil?)
          description = get_wikipedia_description(name,city)
      end
    end
    return description
  end

end