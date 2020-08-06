def swap_letters(word)
  temp = word[-1]
  word[-1] = word[0]
  word[0] = temp
  word
end

def swap(sentence)
  sentence.split(' ').map { |word| swap_letters word }.join(' ')
end

puts swap('hello my good friend')
