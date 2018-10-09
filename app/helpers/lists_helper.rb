module ListsHelper
  def list_params
    params.require(:list).permit(:tournament_id, :game_id, :player_id)
  end
end
