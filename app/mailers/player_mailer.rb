class PlayerMailer < ActionMailer::Base
  default from: ENV['GMAIL_LOGIN']

  def email_sub(player)
    @player = player
    mail(to: @player.email, subject: 'Sub Eamil')
  end

  def email_match(player)
    @player = player
    mail(to: @player.email, subject: 'Match Eamil')
  end
end
