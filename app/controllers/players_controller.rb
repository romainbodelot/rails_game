class PlayersController < ApplicationController
  before_filter :authenticate_player!

  def index
    @posts = current_player.posts.all
  end

  def create
    @player = Player.new(player_params)

    if @player.save
      sign_in(@player) # On connecte l'utilisateur lors de l'inscription
      redirect_to @player, notice: 'Successfully signed in.'
    else
      render :new
    end
  end

end
