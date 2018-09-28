class Match < ActiveRecord::Base
  # attr_accessible :title, :body
  belongs_to :player1_id, :class_name => 'Player'
  belongs_to :player2_id, :class_name => 'Player'
end
