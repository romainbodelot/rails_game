class Debugfinal < ActiveRecord::Migration
  def change
    change_column :tournaments, :longitude, :float, :default => 0.0
    change_column :tournaments, :latitude, :float, :default => 0.0
  end
end
