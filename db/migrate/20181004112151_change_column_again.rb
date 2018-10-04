class ChangeColumnAgain < ActiveRecord::Migration
  def change
    remove_column :lists, :max_player
    add_column :tournaments, :max_player, :integer
    add_column :lists, :player_id, :integer
    add_index :lists, :player_id
    remove_column :tournaments, :players_id
    remove_column :games, :players_id
    remove_column :matches, :lists_id
  end
end
