class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.integer :max_player
      t.references :tournaments
      t.references :games

      t.timestamps
    end
     add_index :lists, :tournaments_id
     add_index :lists, :games_id
  end
end
