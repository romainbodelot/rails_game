class List < ActiveRecord::Base
  attr_accessible :max_player, :tournaments_id, :games_id, :game_list, :player_list
  belongs_to :tournament
  belongs_to :game
  belongs_to :player
end
