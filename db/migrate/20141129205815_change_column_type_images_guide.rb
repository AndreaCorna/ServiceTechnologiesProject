class ChangeColumnTypeImagesGuide < ActiveRecord::Migration
  def change
    change_column :guides , :image ,:text
  end
end
