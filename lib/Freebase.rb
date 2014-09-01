require 'rubygems'
require 'httparty'

class Freebase
  include  HTTParty
  BASE_URL='https://www.googleapis.com/freebase/v1/'


  def  self.search(query,options={})

    response = get(BASE_URL+'search',:query =>{:query => query}.merge(options),:debug_output => $stdout  )

    Rails.logger.debug ("response #{response}")


    if not response.parsed_response['result'].empty?

     return response.parsed_response['result'][0]['output']['description']['/common/topic/description']
    end

    else
      return 'Description not found'




  end



end