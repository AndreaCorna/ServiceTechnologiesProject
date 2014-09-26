class ModifyJoinTable < ActiveRecord::Migration
  def change
    remove_index :guides_place_summaries, [:place_summary_id, :guide_id]
    add_column  :guides_place_summaries, :date ,:string
  end
end
