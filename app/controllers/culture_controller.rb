class CultureController < ApplicationController


  def index
    stupido = Stupid.new(123,"ciao");
    stupido2 = Stupid.new(432,"ciao");

    stupido3 = Stupid.new(43,"ciao");

    stupido4 = Stupid.new(543,"ciao");

    test = [stupido,stupido2,stupido3,stupido4]
    render_with_protection    test.to_json
  end

  def show
    test = ['stub culture show',"city #{params[:city_id]} and place id #{params[:id]}"]
    render_with_protection   test.to_json
  end

  class Stupid
    attr_accessor :id,:descr;

    def initialize(id,descr)
      @id = id;
      @descr=descr;
    end

  end
end

