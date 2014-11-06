# config valid only for Capistrano 3.1
lock '3.2.1'

set :application, 'trippo'
set :repo_url, 'https://434dd7cf2170b160c94d916f0fce5a34f9ac56c4:@github.com/AndreaCorna/ServiceTechnologiesProject.git'

# Default branch is :master
# ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }.call
set :branch, 'capistrano'

# Default deploy_to directory is /var/www/my_app
 set :deploy_to, '/home/deploy/apps/trippo'

# Default value for :scm is :git
set :scm, :git

# Default value for :format is :pretty
 set :format, :pretty

# Default value for :log_level is :debug
# set :log_level, :debug

# Default value for :pty is false
 set :pty, true

# Default value for :linked_files is []
# set :linked_files, %w{config/database.yml}

# Default value for linked_dirs is []
# set :linked_dirs, %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}

# Default value for default_env is {}
set :default_env, {
SECRET_KEY_BASE_DEVELOPMENT:'a0e398990a978570f8e96ab3b79222ac3f52704b3f39b49400061017023a034e8388514eed29e0283cd20064cc059bdde87949831c926834d4164203c21c3099' ,
SECRET_KEY_BASE_TEST: '96d773bca20846f5465297e690fbd90138e1c52c2ebf2a68ebf9f95f4c28096978254a69e11565cb402741105edcce1e56653af5e600d76e6fad631450208997'  ,

SECRET_KEY_BASE: '96d773bca20846f5465297e690fbd90138e1c52c2ebf2a68ebf9f95f4c28096978254a69e11565cb402741105edcce1e56653af5e600d76e6fad631450208996'   ,

API_KEY: 'AIzaSyAFHiWwiB6QIy8TDbdO8iUVhnx4SpDbNuA'      ,

EXPEDIA_KEY: 'aq8ku32u3zhcga8npjt6xtu9'        ,

EXPEDIA_SECRET: 'bGgdkV4N'            ,


SECRET_PASSWORD_DATABASE: 'youllneverguessitforever'      ,

S3_BUCKET: 'trippo'                          ,
AWS_ACCESS_KEY_ID: 'AKIAIMKCN2IFW2XDKUCQ'        ,
AWS_SECRET_ACCESS_KEY: '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'     ,
}

# Default value for keep_releases is 5
# set :keep_releases, 5

#namespace :deploy do

#  desc 'Restart application'
# task :restart do
#   on roles(:app), in: :sequence, wait: 5 do
      # Your restart mechanism here, for example:
      # execute :touch, release_path.join('tmp/restart.txt')
#   end
#end

#  after :publishing, :restart

#  after :restart, :clear_cache do
#    on roles(:web), in: :groups, limit: 3, wait: 10 do
      # Here we can do anything such as:
      # within release_path do
      #   execute :rake, 'cache:clear'
      # end
      #    end
      #  end

      #end
