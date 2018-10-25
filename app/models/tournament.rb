class Tournament < ActiveRecord::Base
  attr_accessible :title, :max_player, :address, :date, :players_id, :latitude, :longitude, :game_list
  geocoded_by :address
  after_validation :geocode, if: :address_changed?
  reverse_geocoded_by :latitude, :longitude
  has_many :lists
  has_many :games, through: :lists
  has_many :players, through: :lists
  serialize :note, Array
  def game_list
    games.collect(&:name).join(', ')
  end

  def game_list=(games_string)
    game_names = games_string.split(',').collect { |s| s.strip.downcase }.uniq
    new_or_found_games = game_names.collect { |name| Game.find_or_create_by_name(name) }
    self.games = new_or_found_games
  end

  def player_list
    players.collect(&:id).join(', ')
  end

  def player_list=(players_integer)
    player_ids = players_integer.split(',').collect { |s| s.strip.downcase }.uniq
    found_players = player_ids.collect { |_name| Player.find_by_id(id) }
    self.players = found_players
  end
end
