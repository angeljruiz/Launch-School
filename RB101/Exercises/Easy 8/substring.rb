require_relative 'substrings_at_start'

def substrings(str)
  results = []
  str.size.times do |i|
    results << substrings_at_start(str.slice(i..str.size))
  end
  results.flatten
end
