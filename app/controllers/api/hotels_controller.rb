class Api::HotelsController < ApplicationController
  include CachingHelper

=begin
The method returns the list of hotel items using the city and token parameters
passed in the url.
=end
  def index
    hotels_list = get_hotels(params[:city_id].downcase,params[:token])
    render_with_protection    hotels_list
  end

=begin
The method returns the details of the object identified by the id
passed in the url.
=end
  def show
    details = hotel_details(params[:id])
    render_with_protection    details
  end
end
