class Addcolumntotournament < ActiveRecord::Migration
  def change
    add_column :tournaments, :note, :text
  end
end
