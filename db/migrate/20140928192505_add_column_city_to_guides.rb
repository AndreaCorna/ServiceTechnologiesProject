class AddColumnCityToGuides < ActiveRecord::Migration
  def change
    add_column :guides , :city ,:string
  end
end
