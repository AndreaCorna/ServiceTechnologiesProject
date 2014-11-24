class Api::UtilityController < ApplicationController
  include CachingHelper

=begin
The method returns the list of utility items using the city and token parameters
passed in the url.
=end
  def index
    utility_items = get_utility(params[:city_id].downcase,params[:token])
    render_with_protection    utility_items
  end

=begin
The method returns the details of the object identified by the id
passed in the url.
=end
  def show
    utility_details = get_details(params[:id])
    render_with_protection   utility_details
  end

end
