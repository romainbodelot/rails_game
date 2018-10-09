class List < ActiveRecord::Base
  attr_accessible :tournament_id, :game_id, :player_id
  belongs_to :tournament
  belongs_to :game
  belongs_to :player
end
