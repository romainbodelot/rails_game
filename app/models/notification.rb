class Notification < ActiveRecord::Base
  attr_accessible :action, :actor_id, :notifiable_id, :notifiable_type, :read_at, :recipient_id

  belongs_to :recipient, class_name: 'Player'
  belongs_to :actor, class_name: 'Player'
  belongs_to :notifiable, polymorphic: true

  scope :unread, -> { where(read_at: nil) }
end
