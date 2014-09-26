class GuidePlaceSummary < ActiveRecord::Base
  self.table_name ='places_to_guides'
  belongs_to :guide
  belongs_to :place_summary
end
