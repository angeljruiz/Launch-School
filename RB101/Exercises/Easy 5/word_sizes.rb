ALPHABET = ('A'..'z').to_a.freeze

def trim_word(word)
  count = 0
  word.chars.each do |char|
    count += 1 unless ALPHABET.include?(char)
  end
  word.size - count
end

def word_sizes(sentence)
  sizes = {}
  sentence.split(' ').each do |word|
    size = trim_word word
    if sizes[size]
      sizes[size] += 1
    else
      sizes[size] = 1
    end
  end
  sizes
end

p word_sizes('Four score and seven.')
