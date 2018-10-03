module PlayersHelper
  def player_params
    params.require(:player).permit(:first_name, :last_name, :address)
  end
end
