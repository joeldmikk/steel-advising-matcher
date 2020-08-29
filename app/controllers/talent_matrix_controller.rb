class TalentMatrixController < ApplicationController

  def overview
    @overview = TalentMatrix.overview
    render json: @overview
  end

end
