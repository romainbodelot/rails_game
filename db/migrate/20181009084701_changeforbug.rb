class Changeforbug < ActiveRecord::Migration
  def change
    rename_table :matches, :matchs
    change_column :players, :longitude, :float, :default => 0.0
    change_column :players, :latitude, :float, :default => 0.0
  end
end
