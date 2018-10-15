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

  def generate
    t_id = params[:tournament_id]
    g_id = params[:game_id]
    array_player = List.where(:game_id => g_id, :tournament_id => t_id).where('player_id IS NOT NULL').pluck(:player_id)
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
        l_id = List.where(:game_id => g_id, :tournament_id => t_id).pluck(:id)
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
        i = i - 2
      end
      i = i + 1
    end
    redirect_to tournament_path(t_id)
  end
end
