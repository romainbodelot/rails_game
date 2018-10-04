module TournamentsHelper
  def tournament_params
    params.require(:tournament).permit(:title, :address, :date, :game_list, :players_id)
  end
end
