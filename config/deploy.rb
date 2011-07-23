set :user,        "deploy"
set :application, "brilliancetech.com"
set :repository,  "git@git.assembla.com:brilliance-web-site.git"
set :use_sudo, false
 
set :scm,        :git
set :branch,     'master'
set :deploy_via, :remote_cache
 
role :web, "brilliancetech.com"
role :app, "brilliancetech.com" # this can be the same as the web server
role :db,  "brilliancetech.com", :primary => true # this can be the same as the web server
 
set :ssh_options, {:forward_agent => true}

set :default_stage, "development"
set :stages, %w(production development)
