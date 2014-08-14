class EntertainmentController < ApplicationController
  include CachingHelper

  def index
    entertainment_items = get_entertainment(params[:city_id]);
    render_with_protection    entertainment_items
  end

  def show
    details = get_details('entertainment',params[:id])
    render_with_protection    details.to_json
  end
end
