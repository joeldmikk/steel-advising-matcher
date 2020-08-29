class TalentMatrix

    def self.overview
      clients = Client.all
      consultants = Consultant.all
      contents = {}

      clients.each do |client|
        JSON.parse(client.talents).each do |talent|
          if !contents.key?(talent)
            contents[talent] = { clients: [{id: client.id, name: client.name}] }
          else
            contents[talent][:clients] |= [{id: client.id, name: client.name}]
          end
        end
      end

      consultants.each do |consultant|
        JSON.parse(consultant.talents).each do |talent|
          if !contents.key?(talent)
            contents[talent] = { consultants: [{id: consultant.id, name: consultant.name}] }
          else
            contents[talent][:consultants] |= [{id: consultant.id, name: consultant.name}]
          end
        end
      end

      puts "\n\nreturning contents: #{contents}\n\n"
      contents
    end

end