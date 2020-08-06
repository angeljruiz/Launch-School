def greetings(name, occupation)
  puts format('Hello, %s! Nice to have a %s %s around.', name.join(' '), occupation[:title], occupation[:occupation])
end

greetings(%w(John Q Doe), title: 'Master', occupation: 'Plumber')
