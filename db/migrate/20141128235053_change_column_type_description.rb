class ChangeColumnTypeDescription < ActiveRecord::Migration
  def change
    change_column :place_summaries , :description , :text
  end
end
