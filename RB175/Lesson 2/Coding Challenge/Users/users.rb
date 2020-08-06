require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"
require 'yaml'

before do
  @users = YAML.load(File.read('users.yaml'))
  count_interests
end

helpers do
  def count_interests
    @total_interests = 0
    @users.each { |user| @total_interests += user[1][:interests].size }
  end
end

get '/' do
  @title = 'User Directory'
  erb :home
end

get '/user/:user' do
  @user = @users[params[:user].to_sym]
  @user[:name] = params[:user].capitalize
  @otherUsers = @users.select { |k, _| k.to_s != @user[:name].to_s.downcase }
  erb :user
end
