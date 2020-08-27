class CreateConsultants < ActiveRecord::Migration[6.0]
  def change
    create_table :consultants do |t|
      t.string :name
      t.string :email
      t.text :notes
      t.text :talents

      t.timestamps
    end
  end
end
