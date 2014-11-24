class Api::SharedGuideController < ApplicationController

  #return the list of the shared guide of a specific city pass as param(city_id)
  # GET /city/:city_id/shared_guide
  def index


    city = params[:city_id]
     #search if city already in the database
    db_city = City.where(:name => city).first
    puts db_city.inspect
    if  (!db_city.nil?)

      lat_lng =  db_city.lat.to_s+':'+db_city.lng.to_s
      puts 'lat lng from db'
      puts lat_lng
    else  #search using geocoder
      location = Geocoder.search(city)
      if location[0].nil? #even geocoder has failed try search name of the citu
        puts 'searching by name'
        guides = Guide.where(:city => city).where(:shared => true)
        puts guides
        render json: guides
        return
      end

      lat = location[0].latitude
      lng = location[0].longitude
      #rounding at the 4 decimal  in order to be flexible to small changes
      lat = (lat*10000).round / 10000.0
      lng = (lng*10000).round / 10000.0
      lat_lng = lat.to_s+':'+lng.to_s
      puts 'lat lng geocoding'
      puts lat_lng
    end
    guides = Guide.where(:lat_lng => lat_lng).where(:shared => true)
    puts guides
    render json: guides
  end
end
