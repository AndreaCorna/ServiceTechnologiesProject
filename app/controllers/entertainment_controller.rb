class EntertainmentController < ApplicationController
  include CachingHelper

=begin
The method returns the list of entertainment items using the city and token parameters
passed in the url.
=end
  def index
    entertainment_items = get_entertainment(params[:city_id].downcase,params[:token]);
    render_with_protection    entertainment_items
  end

=begin
The method returns the details of the object identified by the id
passed in the url.
=end
  def show
    details = get_details(params[:id])
    render_with_protection    details
  end
end
