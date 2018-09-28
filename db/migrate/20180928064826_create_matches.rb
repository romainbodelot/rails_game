class CreateMatches < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.integer :score
      t.integer :winner
      t.boolean :is_equal
      t.integer :player1_id
      t.integer :player2_id
      t.references :lists

      t.timestamps
    end
    add_index :matches, :lists_id
  end
end
