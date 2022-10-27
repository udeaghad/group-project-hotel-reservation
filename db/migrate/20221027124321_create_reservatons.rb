class CreateReservatons < ActiveRecord::Migration[7.0]
  def change
    create_table :reservatons do |t|

      t.timestamps
    end
  end
end
