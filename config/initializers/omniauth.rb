
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '825964482531-hjvdg3mmhqdq2oju9vk7d0ok9um4thpo.apps.googleusercontent.com', 'eIHur70K3F6OJ1WyqvQnesei'
end