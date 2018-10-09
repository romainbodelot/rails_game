class Ability
  include CanCan::Ability
  def initialize(player)
    player ||= Player.new
    #can :manage, :all if player.role == 'admin'
    can :manage, :all
  end
end
