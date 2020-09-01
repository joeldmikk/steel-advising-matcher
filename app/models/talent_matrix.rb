class TalentMatrix

    def self.overview
      clients_overview = self.clients_overview
      consultants_overview = self.consultants_overview
      talents = clients_overview.keys + consultants_overview.keys
      talents.uniq!

      contents = Hash[talents.map {|t| [t, {clients: [], consultants: []}]}]
      puts "CONTENTS: "
      pp contents

      talents.each do |talent|
        contents[talent][:clients] |= [clients_overview[talent]].flatten unless clients_overview[talent].nil?
        contents[talent][:consultants] |= [consultants_overview[talent]].flatten unless consultants_overview[talent].nil?
      end

      contents
    end


    def self.clients_overview
      clients = Client.all.select(:id, :name, :talents)
      talents = clients.map { |t| t.talents.split(',')}.flatten
      contents = Hash[talents.map {|t| [t, []]}]
      clients.each do |client|
        client.talents.split(',').each do |talent|
          contents[talent] |= [{id: client.id, name: client.name}]
        end
      end
      contents
    end


    def self.consultants_overview
      consultants = Consultant.all.select(:id, :name, :talents)
      talents = consultants.map { |t| t.talents.split(',')}.flatten
      contents = Hash[talents.map {|t| [t, []]}]
      consultants.each do |consultant|
        consultant.talents.split(',').each do |talent|
          contents[talent] |= [{id: consultant.id, name: consultant.name}]
        end
      end
      contents
    end

end