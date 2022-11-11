class AddHotelNameToReservations < ActiveRecord::Migration[7.0]
  def change
    add_column :reservations, :hotel_name, :string
  end
end
