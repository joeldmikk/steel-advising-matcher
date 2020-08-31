class Client < ApplicationRecord
  belongs_to :consultant, optional: true

  def get_suggested_consultants
    if self.talents
      talents = JSON.parse(self.talents)
      pp "***********************"
      pp talents
      pp "***********************"
      consultant_talents = JSON.parse(Consultant.first.talents)
      pp consultant_talents
      pp "***********************"
      pp talents & consultant_talents
      pp "***********************"
    end
  end
end
