class CultureController < ApplicationController
  include CachingHelper

  def index
    culture_items = get_culture(params[:city_id])
    render_with_protection    culture_items.to_json
  end

  def show
    details = get_details('culture',params[:id])
    render_with_protection   details.to_json
  end


end

