class TalentMatrix

    def self.overview
      clients = Client.all
      consultants = Consultant.all
      raw_talents = clients.pluck(:talents) << consultants.pluck(:talents)
      talents = []
      raw_talents.flatten.each do |t|
        talents << JSON.parse(t)
        talents.flatten!
      end

      contents = Hash[talents.map {|t| [t, {clients: [], consultants: []}]}]

      clients.each do |client|
        JSON.parse(client.talents).each do |talent|
          contents[talent][:clients] |= [{id: client.id, name: client.name}]
        end
      end

      consultants.each do |consultant|
        JSON.parse(consultant.talents).each do |talent|
          contents[talent][:consultants] |= [{id: consultant.id, name: consultant.name}]
        end
      end

      contents
    end

end