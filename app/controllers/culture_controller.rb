class CultureController < ApplicationController
  include CachingHelper

  def index
    culture_items = get_culture(params[:city_id])
    render_with_protection    culture_items
  end

  def show
    details = get_details(params[:id])
    render_with_protection   details
  end

end

