require 'sinatra/activerecord/rake'
require './app'

desc 'Start server on port 3000 with autoreload.'
task :s do
  sh 'bundle exec shotgun config.ru -p 3000'
end

desc 'startup guard for livereload, less compile, test run, etc'
task :d do
  sh 'bundle exec guard'
end

desc 'start console'
task :c do
  sh 'racksh'
end

desc 'compile less'
task :less do
  sh '/usr/local/share/npm/bin/lessc public/css/less/app.less public/css/app.css'
end

require 'find'
require 'uglifier'
desc 'minify and concat js'
task :js do
  js_file_paths = []
  js_file_paths = ['public/vendor/jquery-jvectormap-1.2.2/jquery-jvectormap-1.2.2.min.js',
                   'public/vendor/jquery-jvectormap-1.2.2/jquery-jvectormap-world-mill-en.js',
                   'public/vendor/angular/angular.min.js',
                   'public/vendor/angular/angular-cookies.min.js'
                  # 'public/js/app.js',
                  # 'public/js/controllers/welcome_controller.js',
                  # 'public/js/controllers/country_controller.js',
                  # 'public/js/controllers/my_countries_controller.js',
                  # 'public/js/services/user_service.js',
                  # 'public/js/services/country_service.js',
                  # 'public/js/services/wikipedia_service.js',
                  # 'public/js/services/geonames_service.js',
                  # 'public/js/services/feedzilla_service.js',
                  # 'public/js/directives/worldmap_directive.js',
                  # 'public/js/filters/expand_currency_filter.js',
                  # 'public/js/filters/titleize_filter.js',
                  # 'public/js/filters/expand_languages_filter.js',
                  # 'public/js/filters/add_commas_filter.js'
                  ]

  Find.find('public/js') { |path| js_file_paths << path if path =~ /.*\.js$/ && path != 'public/js/app.min.js' }
  puts js_file_paths
  File.write('public/js/app.min.js', js_file_paths.map { |f| Uglifier.compile(File.read(f)) }.join)
  puts 'output to public/js/app.min.js'
end

task :default do
  puts `rake -T`
end
