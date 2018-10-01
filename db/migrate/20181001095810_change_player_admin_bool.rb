class ChangePlayerAdminBool < ActiveRecord::Migration
  def change
    change_column :players, :is_admin, :bool, :default => false
  end
end
