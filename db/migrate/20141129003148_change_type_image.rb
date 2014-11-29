class ChangeTypeImage < ActiveRecord::Migration
  def change
    change_column :place_summaries , :image ,:text

  end
end
