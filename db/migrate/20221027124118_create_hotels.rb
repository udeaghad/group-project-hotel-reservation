class CreateHotels < ActiveRecord::Migration[7.0]
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :image
      t.string :bedroom
      t.boolean :livingroom
      t.boolean :kitchen
      t.integer :sleeps
      t.decimal :price

      t.timestamps
    end
  end
end
