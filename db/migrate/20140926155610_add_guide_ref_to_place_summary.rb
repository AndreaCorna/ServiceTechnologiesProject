class AddGuideRefToPlaceSummary < ActiveRecord::Migration
  def change
    add_reference :place_summaries, :guides, index: true
  end
end
