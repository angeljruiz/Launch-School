CONSONANTS = (('A'..'z').to_a - 'AEIOUaeiou'.chars).freeze

def repeater(str)
  results = ''
  str.each_char { |char| results << char << char }
  results
end

def double_consonants(str)
  results = ''
  str.each_char do |char|
    if CONSONANTS.include? char
      results << char << char
    else
      results << char
    end
  end
  results
end

puts double_consonants('String') == 'SSttrrinngg'
puts double_consonants('Hello-World!') == 'HHellllo-WWorrlldd!'
puts double_consonants('July 4th') == 'JJullyy 4tthh'
puts double_consonants('') == ''
