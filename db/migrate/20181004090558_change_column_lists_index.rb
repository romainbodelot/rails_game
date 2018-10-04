class ChangeColumnListsIndex < ActiveRecord::Migration
  def change
    add_index :lists, :tournament_id
    add_index :lists, :game_id
  end
end
