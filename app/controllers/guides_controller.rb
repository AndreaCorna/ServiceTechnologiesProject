class GuidesController < ApplicationController
  def index
  end

  def create
    puts params
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
