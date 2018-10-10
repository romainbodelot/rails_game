class Player < ActiveRecord::Base
  attr_accessible :id, :first_name, :last_name, :email, :password, :password_confirmation, :remember_me, :address, :latitude, :longitude, :game_list, :player_list, :score
  geocoded_by :address
  after_validation :geocode, if: :address_changed?
  reverse_geocoded_by :latitude, :longitude
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable, :omniauthable, omniauth_providers: [:facebook]
  #has_many :player_one, class_name: 'Match', foreign_key: 'palyer1_id'
  #has_many :player_two, class_name: 'Match', foreign_key: 'player2_id'
  has_many :lists
  has_many :tournaments, through: :lists
  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |player|
      player.provider = auth.provider
      player.uid = auth.uid
      player.email = auth.info.email
      player.password = Devise.friendly_token[0, 20]
    end
  end
end
