class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :name
      t.string :description
      t.binary :picture
      t.references :players

      t.timestamps
    end
    add_index :games, :players_id, name => "creator_id"
  end
end
