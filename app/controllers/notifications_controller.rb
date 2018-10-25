class NotificationsController < ApplicationController
  load_and_authorize_resource

  def index
    @notifications = Notification.where(:actor_id => current_player)
    @notifications.all
  end

  def show
    @notification = Notification.find(params[:id])
  end
end
