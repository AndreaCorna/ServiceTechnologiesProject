class Guide < ActiveRecord::Base
  has_many :guide_place_summaries
  has_many :place_summaries , :through => :guide_place_summaries
  belongs_to :user

end
