class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    @app_data = {
      "phone_types" => Applicant::PHONE_TYPES,
      "regions"     => Applicant::REGIONS,
      "current_applicant" => @current_applicant
    }

    @location_path = "/#{params[:path]}"
  end
end
