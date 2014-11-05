require 'timeout'
module FreebaseHelper
  include WikipediaHelper

=begin
The method returns the description of a place. It searches for information using both freebase and wikipedia api.
If the result of freebase isn't null it's returned, otherwise the method returns the wikipedia information.
=end
  def get_description(name,city)
    threads = []
    descr_freebase = nil
    descr_wikipedia = nil
    threads << Thread.new{
       descr_freebase = get_freebase_description(name,city)
    }
    threads << Thread.new{
      descr_wikipedia = get_wikipedia_description(name,city)
    }
    threads.each do |thread|
      thread.join
    end
    if(descr_freebase.nil?)
      return descr_wikipedia
    else
      return descr_freebase
    end
  end

  def get_freebase_description(name,city)
    descrition = nil
    status = Timeout::timeout(30) {
      FreebaseAPI.session = FreebaseAPI::Session.new(key: ENV['API_KEY'], env: :stable)
      results = FreebaseAPI::Topic.search(name+' in '+city)
      best_match = results.values.first
      if(!best_match.nil?)
        best_match.sync
        descrition = best_match.description
      end
    }
    rescue Timeout::Error
      return descrition
    return descrition
  end

end