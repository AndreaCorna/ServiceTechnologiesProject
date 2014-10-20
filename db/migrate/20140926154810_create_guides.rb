class CreateGuides < ActiveRecord::Migration
  def change
    create_table :guides do |t|
      t.string :name
      t.text :description
      t.integer :rating
    end
  end
end
