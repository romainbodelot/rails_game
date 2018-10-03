class TournamentsController < ApplicationController
  before_filter :authenticate_player!
  load_and_authorize_resource
  include TournamentsHelper

  def index
    @tournaments = Tournament.all
    if params[:search].present?
      @tournaments = Tournament.near(params[:search], 50, :order => :distance)
    else
      @tournaments = Tournament.all
    end
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

  def destroy
    @tournament = Tournament.find(params[:id])
    @tournament.destroy

    redirect_to tournaments_path
  end

  def edit
    @tournament = Tournament.find(params[:id])
  end

  def update
    @tournament = Tournament.find(params[:id])
    @tournament.update(tournament_params)

    redirect_to tournament_path(@tournament)
  end
end
