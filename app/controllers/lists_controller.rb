class ListsController < ApplicationController
  load_and_authorize_resource
  include ListsHelper
  def index
    redirect_to root_url
  end

  def show
    @list = List.find(params[:id])
  end

  def new
    @list = List.new
  end

  def create
    @list = List.new(list_params)
    @list.save
    redirect_to lists_path
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    redirect_to lists_path
  end

  def edit
    @list = List.find(params[:id])
  end

  def update
    @list = List.find(params[:id])
    @list.update_attributes(params[:list])
    redirect_to list_path(@list)
  end

  def sub
    @list = List.new
    @list.player_id = params[:player_id]
    @list.tournament_id = params[:tournament_id]
    @list.game_id = params[:game_id]
    if List.where(:player_id => params[:player_id]).where(:game_id => params[:game_id]).where(:tournament_id => params[:tournament_id]).present?
      @list.delete
    else
      @list.save
    end
    redirect_to tournament_path(:id => params[:tournament_id])
  end
end
