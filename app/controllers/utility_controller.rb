class UtilityController < ApplicationController
  include CachingHelper
  def index
    utility_items = get_utility(params[:city_id])
    render_with_protection    utility_items.to_json
  end

  def show
    utility_details = get_details('utility',params[:id])
    render_with_protection   utility_details.to_json
  end

end
