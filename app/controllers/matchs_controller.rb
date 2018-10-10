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
    array_player = List.connection.select_values("SELECT player_id FROM lists WHERE game_id = #{g_id} AND player_id IS NOT NULL AND tournament_id = #{t_id}")
    list_id = List.connection.select_value("SELECT id FROM lists WHERE game_id = #{g_id} AND player_id IS NOT NULL AND tournament_id = #{t_id}")
    i = 1
    array_player.shuffle.each do |element|
      if i == 1
        @match = Match.new
        @match.player1_id = Player.find(element).id
      end
      if i == 2
        equal = [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false].sample
        @match.player2_id = Player.find(element).id
        @match.list_id = list_id
        @match.is_equal = equal
        if equal == true
          @match.save
        else
          @match.winner = Player.find(element).id
          @match.save
        end
        i = 1
      end
      i = 2
    end
    redirect_to matchs_path
  end
end
