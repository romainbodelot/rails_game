module MatchsHelper
  def match_params
    params.require(:match).permit(:score, :winner, :is_equal, :player1_id, :player2_id)
  end
end
