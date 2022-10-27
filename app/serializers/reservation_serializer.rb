class ReservationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :hotel_id

  belongs_to :hotel
end
