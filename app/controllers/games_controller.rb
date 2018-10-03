class GamesController < ApplicationController
  load_and_authorize_resource
  include GamesHelper

  def index
    redirect_to root_url
  end

  def show
    @game = Game.find(params[:id])
  end

  def new
    @game = Game.new
  end

  def create
    @game = Game.new(game_params)
    @game.save

    redirect_to games_path
  end

  def destroy
    @game = Game.find(params[:id])
    @game.destroy

    redirect_to games_path
  end

  def edit
    @game = Game.find(params[:id])
  end

  def update
    @game = Game.find(params[:id])
    @game.update(game_params)

    redirect_to game_path(@game)
  end
end
