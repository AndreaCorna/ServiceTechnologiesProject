class CreateGuidesPlacesJoinThrough < ActiveRecord::Migration
  def change
    create_table :places_to_guides do |t|
      t.belongs_to :guide
      t.belongs_to :place_summary
      t.string :date
      t.timestamps
    end
  end
end
