class List < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :max_player, :tournaments_id, :games_id
end
