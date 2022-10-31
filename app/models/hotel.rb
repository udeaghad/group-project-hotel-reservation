class Hotel < ApplicationRecord
  # belongs_to :user, class_name: "User"
  has_many :reservations, class_name: "Reservation", foreign_key: "hotel_id" 

end
