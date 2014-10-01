
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '825964482531-hjvdg3mmhqdq2oju9vk7d0ok9um4thpo.apps.googleusercontent.com', 'eIHur70K3F6OJ1WyqvQnesei'
  provider :facebook, '573190749454041', '6e54dd94fc79401f15a21e403e837bb0', {:client_options => {:ssl => {:ca_file => Rails.root.join("cacert.pem").to_s}}}
end