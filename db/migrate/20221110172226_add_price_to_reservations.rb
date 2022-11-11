class AddPriceToReservations < ActiveRecord::Migration[7.0]
  def change
    add_column :reservations, :price, :decimal
  end
end
