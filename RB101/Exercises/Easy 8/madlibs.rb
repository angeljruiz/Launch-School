def prompt(str)
  puts format('>%s', str)
end

prompt 'Enter a noun'
noun = gets.chomp
prompt 'Enter a verb'
verb = gets.chomp
prompt 'Enter an adjective'
adj = gets.chomp
prompt 'Enter an adverb'
adverb = gets.chomp

puts format('Do you %s your %s %s %s? That\'s hilarious!', verb, adj, noun, adverb)
