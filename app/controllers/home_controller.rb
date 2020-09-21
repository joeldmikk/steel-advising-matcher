class HomeController < ApplicationController
  # before_action :authenticate_user!
  def index
    @overview = TalentMatrix.overview
  end
end
