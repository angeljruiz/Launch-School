require_relative 'substring'

def palindrome?(str)
  return false if str.size == 1
  size = (str.size / 2.0).ceil
  size.times do |n|
    return false unless str[n] == str[-n - 1]
  end
  true
end

def palindrome2?(str)
  str == str.reverse && str.size > 1
end

def palindromes(str)
  results = []
  str_substrings = substrings(str)
  str_substrings.each do |sub|
    results << sub if palindrome?(sub)
  end
  results
end

puts palindromes('abcd') == []
puts palindromes('madam') == %w(madam ada)
puts palindromes('hello-madam-did-madam-goodbye') == [
  'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
  'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
  '-madam-', 'madam', 'ada', 'oo'
]
puts palindromes('knitting cassettes') == %w(
  nittin itti tt ss settes ette tt
)
