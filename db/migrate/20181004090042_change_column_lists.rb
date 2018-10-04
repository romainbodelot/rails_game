class ChangeColumnLists < ActiveRecord::Migration
  def change
    remove_column :lists, :tournaments_id
    remove_column :lists, :games_id
    add_column :lists, :game_id, :integer
    add_column :lists, :tournament_id, :integer
  end
end
