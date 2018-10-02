class Player < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable,
  :omniauthable, :omniauth_providers => [:facebook]

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |player|
      player.provider = auth.provider
      player.uid = auth.uid
      player.email = auth.info.email
      player.password = Devise.friendly_token[0,20]
    end
  end

  # Setup accessible (or protected) attributes for your model
  attr_accessible :first_name, :last_name, :email, :password, :password_confirmation, :remember_me
  # attr_accessible :title, :body
  has_many :player_one, :class_name => 'Match', :foreign_key => 'palyer1_id'
  has_many :player_two, :class_name => 'Match', :foreign_key => 'player2_id'
end
