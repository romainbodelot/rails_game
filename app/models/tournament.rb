class Tournament < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :title, :address, :date, :players_id, :latitude, :longitude
  geocoded_by :address
  after_validation :geocode, :if => :address_changed?
  reverse_geocoded_by :latitude, :longitude
  has_many :lists
  has_many :games, :through => :lists

  def game_list
    self.games.collect do |game|
      game.name
    end.join(", ")
  end

  def game_list=(games_string)
    game_names = games_string.split(",").collect{|s| s.strip.downcase}.uniq
    new_or_found_games = game_names.collect { |name| Game.find_or_create_by_name(name) }
    self.games = new_or_found_games
  end
end
