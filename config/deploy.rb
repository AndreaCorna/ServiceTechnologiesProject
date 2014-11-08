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
#set :default_env, {}

# Default value for keep_releases is 5
# set :keep_releases, 5

namespace :deploy do

  desc 'Restart application'
 task :restart do
   on roles(:app), in: :sequence, wait: 5 do
      # Your restart mechanism here, for example:

       execute :touch, release_path.join('tmp/restart.txt')
       end
 end
  desc 'compiling grunt and bower'
  task :compile_resources do
    on roles(:app) do
      execute 'npm install'
      execute 'bower install'
      execute 'grunt build --force'
    end
  end
  after :publishing, :compile_resources
  after :compile_resources, :restart


#  after :restart, :clear_cache do
#    on roles(:web), in: :groups, limit: 3, wait: 10 do
      # Here we can do anything such as:
      # within release_path do
      #   execute :rake, 'cache:clear'
      # end
      #    end
      #  end

      end
