require 'timeout'
module FreebaseHelper
  include WikipediaHelper

=begin
The method returns the description of a place using freebase api. If the result of this
search is null, it looks for information using the wikipedia api.
=end
  def get_description(name,city)
    threads = []
    descr_freebase = nil
    descr_wikipedia = nil
    threads << Thread.new{
      status = Timeout::timeout(30) {
        FreebaseAPI.session = FreebaseAPI::Session.new(key: ENV['API_KEY'], env: :stable)
        results = FreebaseAPI::Topic.search(name+' in '+city)
        best_match = results.values.first
        if(!best_match.nil?)
          best_match.sync
          descr_freebase = best_match.description
        end
      }
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

end