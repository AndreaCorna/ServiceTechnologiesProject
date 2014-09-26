class GuidesController < ApplicationController
  def index
  end

  def create
    puts params

    place =  PlaceSummary.new
    place.name = 'dead'
    place.city='ggenova'
    place.description='niente di bello'
    place.rating= 0
    place.lat=4.1234567
    place.price = 0



    guide = Guide.new
    guide.name= 'Mia guida'
    guide.description='ndjenhnhj ndehjdne'
    guide. place_summaries << place


    puts "all item in guide1"
    guide.place_summaries.each { |place| puts "#{place.name} name" }
    puts "da te #{Guide.last.inspect}"
    puts "da te #{Guide.last.place_summaries.inspect}"



    render json:  params
  end


  def edit
  end

  def show
  end

  def update
  end

  def destroy
  end
end
