class Game < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :name, :description, :players_id
  has_many :lists
  has_many :tournaments, :through => :lists
end
