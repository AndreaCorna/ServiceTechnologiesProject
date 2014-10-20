class City < ActiveRecord::Base
  self.primary_key = 'name'
  has_many :city_images
end
