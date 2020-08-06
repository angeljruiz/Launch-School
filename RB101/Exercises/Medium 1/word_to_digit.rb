NUMBERS = %w(zero one two three four five six seven eight nine).freeze

def word_to_digit(str)
  str.split.map do |word|
    if NUMBERS.include?(word.delete_suffix('.'))
      suffix = word[-1] == '.'
      if suffix
        NUMBERS.find_index(word.delete_suffix('.')).to_s + '.'
      else
        NUMBERS.find_index(word.delete_suffix('.'))
      end
    else
      word
    end
  end.join(' ')
end

puts word_to_digit('Please call me at five five five one two three four. Thanks.') == 'Please call me at 5 5 5 1 2 3 4. Thanks.'
