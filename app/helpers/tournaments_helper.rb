module TournamentsHelper
  def tournament_params
    params.require(:tournament).permit(:title, :address, :date, :players_id)
  end
end
