class Changenamematch < ActiveRecord::Migration
  def change
    rename_column :matches, :score, :loser
  end
end
