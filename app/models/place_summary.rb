class PlaceSummary < ActiveRecord::Base
  self.table_name = 'place_summaries'
  has_many :guides , :through => :guide_place_summaries
  has_many :guide_place_summaries
end
