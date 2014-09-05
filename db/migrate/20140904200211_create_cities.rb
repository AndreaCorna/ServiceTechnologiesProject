class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities, { id: false } do |t|
      t.column :name, :string, :null => false
      t.column :state, :string
      t.column :lat, :float
      t.column :lng, :float
    end
    execute 'ALTER TABLE cities ADD PRIMARY KEY (name);'
  end
end
