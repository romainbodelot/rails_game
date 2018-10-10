class Delcolumnloser < ActiveRecord::Migration
  def change
    remove_column :matches, :loser
  end
end
