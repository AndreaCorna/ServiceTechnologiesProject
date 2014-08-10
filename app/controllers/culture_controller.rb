class CultureController < ApplicationController
  include PlacesHelper::CultureHelperCity

  def index
    culture_items = get_culture_items(params[:city_id])
    render_with_protection    culture_items.to_json
  end

  def show
    details = get_culture_details(params[:id])
    render_with_protection   details.to_json
  end


end

