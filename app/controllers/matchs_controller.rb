class MatchsController < ApplicationController
  load_and_authorize_resource
  include MatchsHelper

  def index
    @matchs = Match.all
  end

  def show
    @match = Match.find(params[:id])
  end

  def new
    @match = Match.new
  end

  def create
    @match = Match.new(match_params)
    @match.save
    redirect_to matchs_path
  end

  def destroy
    @match = Match.find(params[:id])
    @match.destroy
    redirect_to matchs_path
  end

  def edit
    @match = Match.find(params[:id])
  end

  def update
    @match = Match.find(params[:id])
    @match.update_attributes(params[:match])
    redirect_to match_path(@match)
  end
end
