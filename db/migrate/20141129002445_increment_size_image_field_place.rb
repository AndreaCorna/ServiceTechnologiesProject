class IncrementSizeImageFieldPlace < ActiveRecord::Migration
  def change
    change_column :place_summaries , :image ,:string, :limit => 600
  end
end
