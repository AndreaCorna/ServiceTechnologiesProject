class SharedGuideController < ApplicationController
  def index
    city = params[:city_id]
    guides = Guide.where(:city => city)
    puts guides
    render json: guides
  end
end
