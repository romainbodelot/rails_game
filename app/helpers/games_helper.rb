module GamesHelper
  def game_params
    params.require(:game).permit(:name)
  end
end
