class AddIndexToPlaceSummaries < ActiveRecord::Migration
  def change
    add_index :place_summaries , :google_id
  end
end
