class CreateClients < ActiveRecord::Migration[6.0]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :email
      t.text :notes
      t.jsonb :talents

      t.timestamps
    end
  end
end
