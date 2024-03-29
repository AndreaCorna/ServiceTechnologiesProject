Expedia.setup do |config|
	config.cid = 55505 # your cid once you go live.
	config.api_key = ENV['EXPEDIA_KEY']
	config.shared_secret = ENV['EXPEDIA_SECRET']
	config.locale = 'en_US' # For Example 'de_DE'. Default is 'en_US'
	config.currency_code = 'EUR' # For Example 'EUR'. Default is 'USD'
	config.minor_rev = 26 # between 4-26 as of July 2014. Default is 4. 26 being latest
end
