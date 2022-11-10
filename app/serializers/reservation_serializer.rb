class ReservationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :user_id, :hotel_id, :city, :date, :hotel_name, :price

  belongs_to :hotel
end
