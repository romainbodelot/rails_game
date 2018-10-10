module MatchsHelper
  def match_params
    params.require(:match).permit(:loser, :winner, :is_equal, :player1_id, :player2_id, :list_id)
  end
end
