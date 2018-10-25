class Ability
  include CanCan::Ability

  def initialize(player)
    player ||= Player.new
    can :read, :all
    can :sub, Tournament
    can :note, Tournament
    can :manage, Player
    can :manage, :all if player.role == 'admin'
  end
end
