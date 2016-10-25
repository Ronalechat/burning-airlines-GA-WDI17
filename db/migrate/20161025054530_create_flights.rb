class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.date :date
      t.text :flight_num
      t.text :origin
      t.text :destination
      t.integer :airplane_id

      t.timestamps null: false
    end
  end
end
