class Addlistidtomatch < ActiveRecord::Migration
  def change
    add_column :matches, :list_id, :integer
    add_index :matches, :list_id
  end
end
