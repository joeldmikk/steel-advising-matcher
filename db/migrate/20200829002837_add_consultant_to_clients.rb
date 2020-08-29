class AddConsultantToClients < ActiveRecord::Migration[6.0]
  def change
    add_reference :clients, :consultant, foreign_key: true, index: true
  end
end
