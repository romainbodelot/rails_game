class PlayersController < ApplicationController
  def index
    redirect_to "/tournaments"
  end

  def create
    @player = Player.new(player_params)

    if @player.save
      sign_in(@player)
      redirect_to @player, notice: 'Successfully signed in.'
    else
      render :new
    end
  end

end
