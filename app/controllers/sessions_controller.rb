class SessionsController < ApplicationController
  include SessionsHelper
  
  def logout
    log_out
    redirect_to root_path
  end
end
