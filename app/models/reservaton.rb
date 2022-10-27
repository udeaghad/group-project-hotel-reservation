class Reservaton < ApplicationRecord
  belongs_to :user, class_name: "User"
  belongs_to :hotel, class_name: "Hotel"

  validates :user_id, presence: true
  validates :hotel_id, presence: true

end
