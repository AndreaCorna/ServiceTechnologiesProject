require 'net/http'
require 'httparty'
require 'uri'
module WikipediaHelper


  def get_wikipedia_description(name,city)
    url = URI.encode('http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch='+name+' '+city+'&prop=timestamp')
    response = HTTParty.get(url)
    description = ''
    json = JSON.parse(response.body)
    if(!(title = json['query']['search'][0]['title']).nil?)
      url_page = URI.encode('http://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles='+title)
      data = HTTParty.get(url_page).body
      data_json = JSON.parse(data)
      key =  data_json.fetch('query').fetch('pages').keys
      string =  data_json['query']['pages'][key.to_param]['extract']
      description  = string.strip_tags
    end
    return description
  end

end