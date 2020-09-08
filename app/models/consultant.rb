class Consultant < ApplicationRecord
  has_many :clients

  def client_names
    self.clients.present? ? self.clients.map(&:name) : nil
  end
end
