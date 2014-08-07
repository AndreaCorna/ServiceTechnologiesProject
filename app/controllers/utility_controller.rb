class UtilityController < ApplicationController
  include UtilityHelper
  def index
    utility_items = get_utility_items(params[:city_id])
    render_with_protection    utility_items.to_json
  end

  def show
    utility_details = get_utility_details(params[:id])
    render_with_protection   utility_details.to_json
  end

end
