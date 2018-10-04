class List < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :max_player, :tournaments_id, :games_id
  belongs_to :tournament
  belongs_to :game
end
