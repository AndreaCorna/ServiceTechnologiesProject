class HomeController < ApplicationController

  def index
    puts '---------------------------------------'
    puts 'SECRET_KEY_BASE_DEVELOPMENT'
    puts ENV["SECRET_KEY_BASE_DEVELOPMENT"]
    redirect_to "/UI/#"
  end

end
