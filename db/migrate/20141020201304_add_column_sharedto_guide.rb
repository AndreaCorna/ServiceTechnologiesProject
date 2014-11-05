class AddColumnSharedtoGuide < ActiveRecord::Migration
  def change
    add_column :guides,:shared,:boolean
  end
end
