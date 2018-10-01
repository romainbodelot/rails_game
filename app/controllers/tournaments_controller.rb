class TournamentsController < ApplicationController
  before_filter :authenticate_player!
  include TournamentsHelper

  def index
    @tournaments = Tournament.all
  end

  def show
    @tournament = Tournament.find(params[:id])
  end

  def new
    @tournament = Tournament.new
  end

  def create
    @tournament = Tournament.new(tournament_params)
    @tournament.save

    redirect_to tournaments_path
  end
end
