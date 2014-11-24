class Api::CultureController < ApplicationController
  include CachingHelper

=begin
The method returns the list of culture item using the city and token parameters
passed in the url.
=end
  def index
    culture_items = get_culture(params[:city_id].downcase,params[:token])
    render_with_protection    culture_items
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

