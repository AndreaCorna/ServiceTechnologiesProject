class FoodController < ApplicationController
  include CachingHelper

  def index
    food_items = get_food(params[:city_id],params[:token])
    render_with_protection    food_items
  end

  def show
    details = get_details(params[:id])
    render_with_protection   details
  end
end
