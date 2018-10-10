class Addscoreforrank < ActiveRecord::Migration
  def change
    remove_column :players, :nb_win
    remove_column :players, :nb_lose
    remove_column :players, :nb_equal
    add_column :players, :score, :integer, :default => 0
  end
end
