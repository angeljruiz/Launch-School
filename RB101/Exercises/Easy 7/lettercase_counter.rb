ALPHABET = ('A'..'z').to_a.freeze

def letter_case_count(str)
  results = { upper: 0, lower: 0, neither: 0 }
  str.chars do |char|
    if !ALPHABET.include? char
      results[:neither] += 1
    elsif char == char.upcase
      results[:upper] += 1
    else
      results[:lower] += 1
    end
  end
  results
end

puts letter_case_count 'weiFuh2'
