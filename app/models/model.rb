class Model < ActiveRecord::Base
  attr_accessible :email, :password, :password_confirmation, :remember_me
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable
end
