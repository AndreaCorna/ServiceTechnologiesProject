class CityController < ApplicationController

  before_filter :intercept_html_requests
  layout false
  respond_to :json

  def index

  end

  def hotel
    test = %w('dsa','dsadsa','test').to_json
    render json:    test
  end



  private
  def intercept_html_requests
    redirect_to('/') if request.format == Mime::HTML
  end

end
