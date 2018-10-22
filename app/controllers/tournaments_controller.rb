class TournamentsController < ApplicationController
  before_filter :authenticate_player!
  load_and_authorize_resource
  include TournamentsHelper

  def index
    if params[:search].present?
      @tournaments = Tournament.near(params[:search], 50, order: :distance)
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
    @tournament.update_attributes(params[:tournament])
    redirect_to tournament_path(@tournament)
  end

  def generate
    @game = Game.find(params[:game_id])
    @id_list = List.where(:game_id => params[:game_id], :tournament_id => params[:tournament_id]).pluck(:id)
    @id_match = Match.where(:list_id => @id_list)
    t_id = params[:tournament_id]
    g_id = params[:game_id]
    array_player = List.where(game_id: g_id, tournament_id: t_id).where('player_id IS NOT NULL').pluck(:player_id)
    i = 1
    array_player.shuffle.each do |element|
      if i == 1
        @match = Match.new
        @match.player1_id = Player.find(element).id
        score_1 = Player.find(element)
      end
      if i == 2
        equal = [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false].sample
        @match.player2_id = Player.find(element).id
        score_2 = Player.find(element)
        l_id = List.where(game_id: g_id, tournament_id: t_id).pluck(:id)
        @match.list_id = l_id.at(0)
        if equal == true
          @match.save
          score_1.update_attributes(score: score_1.score + 1)
          score_2.update_attributes(score: score_2.score + 1)
        else
          @match.winner = Player.find(element).id
          @match.save
          score_2.update_attributes(score: score_2.score + 3)
        end
        i -= 2
      end
      i += 1
    end

    respond_to do |format|
      format.html
      format.js
    end
  end

  def sub
    @game = Game.find(params[:game_id])
    list = List.new
    list.player_id = params[:player_id]
    list.tournament_id = params[:tournament_id]
    list.game_id = params[:game_id]
    if List.where(player_id: params[:player_id]).where(game_id: params[:game_id]).where(tournament_id: params[:tournament_id]).present?
      @a = List.where(game_id: params[:game_id], tournament_id: params[:tournament_id]).where('player_id IS NOT NULL').size
      list.delete
    else
      @a = List.where(game_id: params[:game_id], tournament_id: params[:tournament_id]).where('player_id IS NOT NULL').size + 1
      list.save
    end

    respond_to do |format|
      format.html
      format.js
    end
  end
end
