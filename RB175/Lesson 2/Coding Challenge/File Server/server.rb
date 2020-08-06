require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"

get '/' do
  @files = Dir.children(__dir__ + '/public')
  @sort = params['sort']
  @files.reverse! if @sort == 'desc'
  erb :template
end
