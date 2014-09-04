class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
      t.column :name, :string, :null => false
      t.column :state, :string
      t.column :lat, :float
      t.column :lng, :float
      t.column :images, :string
      t.timestamps
    end
  end
end
