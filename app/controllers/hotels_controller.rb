class HotelsController < ApplicationController
  include CachingHelper
  def index
    hotels_list = get_hotels(params[:city_id])
    render_with_protection    hotels_list
  end

  def show
    details = hotel_details(params[:id])
    render_with_protection    details.to_json
  end
end
