class SharedGuideController < ApplicationController

  #return the list of the shared guide of a specific city pass as param(city_id)
  def index


    city = params[:city_id]
    user = current_user
    puts user.inspect
    guides = Guide.where(:city => city).where(:shared => true)

    render json: guides
  end
end
