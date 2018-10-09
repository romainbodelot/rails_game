class Match < ActiveRecord::Base
  attr_accessible :score, :winner, :is_equal, :player1_id, :player2_id
  belongs_to :player1_id, class_name: 'Player'
  belongs_to :player2_id, class_name: 'Player'
end
