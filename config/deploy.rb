# config valid only for Capistrano 3.1
lock '3.2.1'
puts ENV['GITHUB_KEY']
set :application, 'trippo'
set :repo_url, 'https://'+ENV['GITHUB_KEY']+':@github.com/AndreaCorna/ServiceTechnologiesProject.git'

# Default branch is :master
# ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }.call
set :branch, 'master'

# Default deploy_to directory is /var/www/my_app
 set :deploy_to, '/var/www/trippo'

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





  desc 'compiling grunt and bower'
  task :compile_resources do
    on roles(:app) do

        execute "cd '#{release_path}'; npm install"
        execute "cd '#{release_path}'; bower install"
        execute "cd '#{release_path}'; grunt build --force"
        execute "cd '#{release_path}'; grunt compile"

    end
  end

  task :restart do
    on roles(:app) do
      execute "mkdir #{release_path}/tmp"
      execute "touch #{release_path}/tmp/restart.txt"
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