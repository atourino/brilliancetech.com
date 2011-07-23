set :user,        "deploy"
set :application, "rompe.me"
set :repository,  "git@git.assembla.com:rompeme.git"
set :use_sudo, false
 
set :scm,        :git
set :branch,     'master'
set :deploy_via, :remote_cache
 
role :web, "teto.tetonetwork.com"
role :app, "teto.tetonetwork.com" # this can be the same as the web server
role :db,  "teto.tetonetwork.com", :primary => true # this can be the same as the web server
 
set :ssh_options, {:forward_agent => true}

set :default_stage, "development"
set :stages, %w(production development)
