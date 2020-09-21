class TalentMatrixController < ApplicationController

  def overview
    @overview = { overview: TalentMatrix.overview, clientsOverview: TalentMatrix.clients_overview, consultantsOverview: TalentMatrix.consultants_overview }
    # @overview = TalentMatrix.overview
    render json: @overview
  end

  def clients_overview
    @clients_overview = TalentMatrix.clients_overview
    render json: @clients_overview
  end

  def consultants_overview
    @consultants_overview = TalentMatrix.consultants_overview
    render json: @consultants_overview
  end

end
