class Client < ApplicationRecord
  belongs_to :consultant, optional: true

  def get_suggested_consultants
    Client.suggest_consultants(self.talents)
  end

  def self.suggest_consultants(talents)
    return Consultant.all if talents.nil?
    talents = talents.split(",").join("|")
    consultants = Consultant.where("talents ~* ?", "(#{talents})")
    consultants.length > 0 ? consultants : Consultant.all
  end

end
