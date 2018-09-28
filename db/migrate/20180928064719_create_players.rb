class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :address
      t.boolean :is_admin
      t.integer :nb_win
      t.integer :nb_lose
      t.integer :nb_equal

      t.timestamps
    end
  end
end
