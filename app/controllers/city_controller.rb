class CityController < ApplicationController
  def index
    test = ['Milano','Madrid','New York', 'Amsterdam']
    render  json:  test.to_json
  end



  def show
    test = [Provaimmagine.new("assets/images/trippo.png","descrizione1"),Provaimmagine.new("assets/images/trippo.png","descrizione2")];
    render  json:  test.to_json
  end

  class Provaimmagine
    attr_accessor :image,:descr;

    def initialize(image,descr)
      @image = image
      @descr = descr
    end

  end
end
