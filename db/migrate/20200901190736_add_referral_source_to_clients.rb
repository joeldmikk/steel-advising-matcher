class AddReferralSourceToClients < ActiveRecord::Migration[6.0]
  def change
    add_column :clients, :referral_source, :string
  end
end
