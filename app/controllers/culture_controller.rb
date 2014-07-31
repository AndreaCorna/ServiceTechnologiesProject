class CultureController < ApplicationController


  def index
    stupido = Stupid.new(123,"culture 1");
    stupido2 = Stupid.new(432,"culture 2");

    stupido3 = Stupid.new(43,"culture 3");

    stupido4 = Stupid.new(543,"culture 4");
    stupido5 = Stupid.new(5245543,"culture 5");
    test = [stupido,stupido2,stupido3,stupido4,stupido5]
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

