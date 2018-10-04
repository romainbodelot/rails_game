module GamesHelper
  def game_params
    params.require(:game).permit(:name, :description)
  end
end
