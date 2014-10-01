class ApplicationController < ActionController::Base
  #force ssl
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user


  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end



  after_filter  :set_csrf_cookie_for_ng

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  def render_with_protection(json_content, parameters = {})
    render parameters.merge(content_type: 'application/json', text: ")]}',\n" + json_content)
  end

  protected

  def verified_request?
    super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
  end

end
