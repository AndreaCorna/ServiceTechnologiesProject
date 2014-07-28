class CultureController < ApplicationController
  def index
    test = ['stub culture index ',"city #{params[:city_id]}"]
    render_with_protection    test.to_json
  end

  def show
    test = ['stub culture show',"city #{params[:city_id]} and place id #{params[:id]}"]
    render_with_protection   test.to_json
  end
end
