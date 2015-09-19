  module SessionsHelper
    def current_applicant
      @current_applicant ||= Applicant.find_by_email(session[:applicant_email])
    end

    def logged_in?
      !current_applicant.nil?
    end

    def log_in(applicant)
      session[:applicant_email] = applicant.email
      session[:applicant_phone] = applicant.phone
    end

    def log_out
      session.delete(:applicant_email)
      session.delete(:applicant_phone)
      @current_applicant = nil
    end

    def logged_in?
      !current_applicant.nil?
    end

end
