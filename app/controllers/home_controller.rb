class HomeController < ApplicationController

  def index
    redirect_to "/compiled/#!"
  end

end
