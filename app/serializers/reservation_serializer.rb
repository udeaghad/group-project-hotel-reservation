class ReservationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :user_id, :hotel_id, :city, :date

  belongs_to :hotel
end
