password = nil

def set_password
  puts 'What would you like your password to be?'
  gets.chomp
end

def verify_password(pass)
  puts '** Login **'
  print 'Password: '
  input = gets.chomp
  if input == pass
    puts 'Welcome to the inside!'
  else
    puts 'Authentication failed.'
  end
end

password = set_password unless password

verify_password(password)
