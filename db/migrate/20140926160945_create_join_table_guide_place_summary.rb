class CreateJoinTableGuidePlaceSummary < ActiveRecord::Migration
  def change
    create_join_table :guides, :place_summaries do |t|
        t.index [:guide_id, :place_summary_id]
        t.index [:place_summary_id, :guide_id]
      end
  end
end
