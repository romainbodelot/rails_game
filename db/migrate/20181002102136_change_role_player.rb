class ChangeRolePlayer < ActiveRecord::Migration
  def change
    remove_column :players, :is_admin
    add_column :players, :role, :string, :default => "default"
  end
end
