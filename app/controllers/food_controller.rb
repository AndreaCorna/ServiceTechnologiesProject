class FoodController < ApplicationController
  include CachingHelper

=begin
The method returns the list of food items using the city and token parameters
passed in the url.
=end
  def index
    food_items = get_food(params[:city_id].downcase,params[:token])
    render_with_protection    food_items
  end

=begin
The method returns the details of the object identified by the id
passed in the url.
=end
  def show
    details = get_details(params[:id])
    render_with_protection   details
  end
end
