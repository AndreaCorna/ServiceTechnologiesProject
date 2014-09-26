class DropGuidesPlaceSummary < ActiveRecord::Migration
  def change
    drop_join_table  :guides, :place_summaries
  end
end
