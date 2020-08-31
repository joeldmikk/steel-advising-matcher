class TalentMatrix

    def self.overview
      clients_overview = self.clients_overview
      consultants_overview = self.consultants_overview
      talents = clients_overview.keys + consultants_overview.keys
      talents.uniq!

      contents = Hash[talents.map {|t| [t, {clients: [], consultants: []}]}]

      talents.each do |talent|
        contents[talent][:clients] |= [clients_overview[talent]] unless clients_overview[talent].nil?
        contents[talent][:consultants] |= [consultants_overview[talent]] unless consultants_overview[talent].nil?
      end

      contents
    end


    def self.clients_overview
      clients = Client.all.select(:id, :name, :talents)
      talents = clients.map(&:talents)
      contents = Hash[talents.map {|t| [t, []]}]
      clients.each do |client|
        client.talents.split(',').each do |talent|
          payload = {id: client.id, name: client.name}
          pp payload
          contents[talent] |= [payload]
        end
      end
      puts "\n\nCLIENTS:\n\n"
      pp contents
      contents
    end


    def self.consultants_overview
      consultants = Consultant.all.select(:id, :name, :talents)
      talents = consultants.map(&:talents)
      # talents = self.format_raw_talents(raw_talents)
      contents = Hash[talents.map {|t| [t, []]}]
      consultants.each do |consultant|
        consultant.talents.split(',').each do |talent|
          contents[talent] |= [{id: consultant.id, name: consultant.name}]
        end
      end
      contents
    end

    # def self.format_raw_talents(raw_talents)
    #   talents = []
    #   puts "raw_talents: \n\n"
    #   pp raw_talents
    
    #   raw_talents.flatten.each do |t|
    #     talents << JSON.parse(t)
    #     talents.flatten!
    #   end
    #   return talents.uniq
    # end

end