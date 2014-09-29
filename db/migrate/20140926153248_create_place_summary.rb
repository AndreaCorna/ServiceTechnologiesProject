class CreatePlaceSummary < ActiveRecord::Migration
  def change
    create_table :place_summaries do |t|
      t.string :google_id
      t.string :name
      t.decimal :lat
      t.decimal :lng
      t.integer :rating
      t.integer :price
      t.string :image
      t.string :icon
      t.string :tag
      t.text :description
      t.string :city

    end
  end
end
