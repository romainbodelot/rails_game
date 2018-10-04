class Game < ActiveRecord::Base
  attr_accessible :name, :description, :players_id, :game_list, :player_list
  has_many :lists
  has_many :tournaments, through: :lists
end
