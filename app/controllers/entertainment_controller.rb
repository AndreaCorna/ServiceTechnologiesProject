class EntertainmentController < ApplicationController
  include PlacesHelper::EntertainmentHelperCity

  def index
    entertainment_items = get_entertainment_items(params[:city_id]);
    render_with_protection    entertainment_items.to_json
  end

  def show
    details = get_entertainment_details(params[:id])
    render_with_protection    details.to_json
  end
end
