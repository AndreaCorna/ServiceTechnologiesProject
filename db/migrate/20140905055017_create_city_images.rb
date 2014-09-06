class CreateCityImages < ActiveRecord::Migration
  def change
    create_table :city_images do |t|
      t.column :url, :string
      t.column :city_id, :string
    end
    add_index :city_images, :city_id

  end
end
