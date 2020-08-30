class Client < ApplicationRecord
  belongs_to :consultant, optional: true
end
