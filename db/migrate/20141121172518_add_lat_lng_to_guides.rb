class AddLatLngToGuides < ActiveRecord::Migration
  def change
    add_column :guides,:lat_lng,:string
  end
end
