class Game < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :name, :description, :players_id
end
