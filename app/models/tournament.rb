class Tournament < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :title, :address, :date, :players_id
end
