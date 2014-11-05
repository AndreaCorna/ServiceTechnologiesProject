class SharedGuideController < ApplicationController

  #return the list of the shared guide of a specific city pass as param(city_id)
  # GET /city/:city_id/shared_guide
  def index


    city = params[:city_id]

    guides = Guide.where(:city => city).where(:shared => true)
    puts guides
    render json: guides
  end
end
