module FreebaseHelper

  def get_description(name)
    FreebaseAPI.session = FreebaseAPI::Session.new(key: ENV['API_KEY'], env: :stable)
    results = FreebaseAPI::Topic.search(name)
    best_match = results.values.first
    if(!best_match.nil?)
      best_match.sync
      description = best_match.description
    end
    return description
  end

end