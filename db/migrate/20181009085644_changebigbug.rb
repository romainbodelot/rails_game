class Changebigbug < ActiveRecord::Migration
  def change
    rename_table :matchs, :matches
  end
end
