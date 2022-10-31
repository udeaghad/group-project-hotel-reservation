class ReservationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :hotel_id, :city, :date

  belongs_to :hotel
end
