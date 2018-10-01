class Players::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    @player = Player.from_omniauth(request.env["omniauth.auth"])
    sign_in_and_redirect @player
  end
end
