class HotelsController < ApplicationController
  include HotelsHelper
  def index
    hotels_list = get_hotels_list(params[:city_id])
    render_with_protection    hotels_list.to_json
  end

  def show
    details = get_hotel_details(params[:id])
    render_with_protection    details.to_json
  end
end
