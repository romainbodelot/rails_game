module GamesHelper
  def game_params
    params.require(:game).permit(:name, :description, :players_id)
  end
end
