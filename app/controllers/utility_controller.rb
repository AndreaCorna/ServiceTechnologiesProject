class UtilityController < ApplicationController
  include CachingHelper
  def index
    utility_items = get_utility(params[:city_id])
    render_with_protection    utility_items
  end

  def show
    utility_details = get_details(params[:id])
    render_with_protection   utility_details
  end

end
