class Tournament < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :title, :address, :date, :players_id, :latitude, :longitude
  geocoded_by :address
  after_validation :geocode, :if => :address_changed?
  reverse_geocoded_by :latitude, :longitude
end
