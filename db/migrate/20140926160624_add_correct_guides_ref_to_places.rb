class AddCorrectGuidesRefToPlaces < ActiveRecord::Migration
  def change
    add_reference :guides, :place_summaries, index: true
  end
end
