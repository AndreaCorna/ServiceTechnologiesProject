class AddColumnUserToGuide < ActiveRecord::Migration
  def change
    add_column :guides ,:user_id,:integer
    add_index :guides, :user_id
  end
end
