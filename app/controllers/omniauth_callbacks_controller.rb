class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  # skip_before_action :authenticate_user!

  def google_oauth2
    auth = request.env["omniauth.auth"]

    if ENV['EMAIL_ALLOW_LIST'].include? auth["info"]["email"].downcase
      user = User.where(provider: auth["provider"], uid: auth["uid"])
            .first_or_initialize(email: auth["info"]["email"])
      user.name ||= auth["info"]["name"]
      user.save!

      sign_in(:user, user)

      redirect_to after_sign_in_path_for(user)
    end
  end

  protected

  def after_omniauth_failure_path_for(_scope)
    new_session_path
  end

  def after_sign_in_path_for(resource_or_scope)
    stored_location_for(resource_or_scope) || root_path
  end

  private

  def from_google_params
    @from_google_params ||= {
      uid: auth.uid,
      email: auth.info.email,
      full_name: auth.info.name,
      avatar_url: auth.info.image
    }
  end

  def auth
    @auth ||= request.env['omniauth.auth']
  end
end



