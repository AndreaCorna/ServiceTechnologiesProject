require 'net/http'
require 'httparty'
require 'uri'
require 'timeout'

module WikipediaHelper

=begin
The method returns the wikipedia description related to the name of the place in the city specified as
parameters.
=end
  def get_wikipedia_description(name,city)
    url = URI.encode('http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch='+name+' '+city+'&prop=timestamp')
    description = nil
    status = Timeout::timeout(30) {
      response = HTTParty.get(url)
      json = JSON.parse(response.body)
      if(!json.nil? && !json['query']['search'][0].nil?)
        title = json['query']['search'][0]['title']
        url_page = URI.encode('http://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles='+title)
        data = HTTParty.get(url_page).body
        data_json = JSON.parse(data)
        key =  data_json.fetch('query').fetch('pages').keys
        string =  data_json['query']['pages'][key.to_param]['extract']
        if (!string.nil?)
            description  = string.strip_tags
        end
      end
    }
    rescue Timeout::Error
      return description
    return description
  end

end