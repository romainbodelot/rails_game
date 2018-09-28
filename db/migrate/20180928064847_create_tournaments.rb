class CreateTournaments < ActiveRecord::Migration
  def change
    create_table :tournaments do |t|
      t.string :title
      t.string :address
      t.date :date
      t.references :players

      t.timestamps
    end
     add_index :tournaments, :players_id, name => "creator_id"
  end
end
