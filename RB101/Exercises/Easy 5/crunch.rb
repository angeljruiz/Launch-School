
def crunch(sentence)
  cleaned = []
  sentence.each_char { |char| cleaned << char unless cleaned.last == char }
  cleaned.join('')
end

puts crunch('ddaaiillyy ddoouubbllee') == 'daily double'
puts crunch('4444abcabccba') == '4abcabcba'
puts crunch('ggggggggggggggg') == 'g'
puts crunch('a') == 'a'
puts crunch('') == ''
