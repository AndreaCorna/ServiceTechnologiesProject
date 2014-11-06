#This is to use the local redis server
#$redis = Redis.new(host:'localhost', port: 6379)

#This is to use the remote redis server
#$redis = Redis.new(:url => ENV["REDISCLOUD_URL"])
$redis = Redis.new(host: 'tripporedis.dzrkcw.0001.usw2.cache.amazonaws.com', port: 6379)

