class ApplicantsController < ApplicationController
  def create
    @applicant = Applicant.new(applicant_params)

    if @applicant.save
      render json: @applicant
    else
      render json: @applicant.errors, status: :unprocessable_entity
    end
  end

  def update
    @applicant = Applicant.find(params[:id])
  end
end
