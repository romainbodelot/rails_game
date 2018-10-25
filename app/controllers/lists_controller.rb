class ListsController < ApplicationController
  before_filter :authenticate_player!
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
end
