class PlayersController < ApplicationController
  load_and_authorize_resource
  include PlayersHelper

  def index
    redirect_to root_url
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

  def show
    @player = Player.find(params[:id])
  end

  def edit
    @player = Player.find(params[:id])
  end

  def update
    @player = Player.find(params[:id])
    @player.update_attribute(player_params)

    redirect_to player_path(@player)
  end
end
