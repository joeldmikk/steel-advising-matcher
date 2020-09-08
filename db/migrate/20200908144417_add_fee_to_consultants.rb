class AddFeeToConsultants < ActiveRecord::Migration[6.0]
  def change
    add_column :consultants, :fee, :integer
  end
end
