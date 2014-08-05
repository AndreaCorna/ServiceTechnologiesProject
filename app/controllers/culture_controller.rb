class CultureController < ApplicationController
#include GooglePlaces

  def index

    stupido = Stupid.new(123,"prova","culture 1",1,3);
    stupido2 = Stupid.new(432,"prova","culture 2",1,3);

    stupido3 = Stupid.new(43,"prova","culture 3",1,3);

    stupido4 = Stupid.new(543,"prova","culture 4",1,3);
    stupido5 = Stupid.new(5245543,"prova","culture 5",1,3);

    test = [stupido,stupido2,stupido3,stupido4,stupido5]
    #test = GooglePlaces.CultureItem.get_culture_items();
    render_with_protection    test.to_json
  end

  def show
    test = ['stub culture show',"city #{params[:city_id]} and place id #{params[:id]}"]
    render_with_protection   test.to_json
  end

  class Stupid
    attr_accessor :id,:name,:descr,:price,:rating;

    def initialize(id,name,descr,price,rating)
      @id = id;
      @name = name;
      @descr=descr;
      @price=price;
      @rating=rating;
    end

  end
end

