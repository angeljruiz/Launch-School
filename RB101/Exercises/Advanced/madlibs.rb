PUNCTUATION = %w(! , .).freeze
PLACEHOLDER = %w([noun] [adject] [adverb] [verb]).freeze
NOUNS = File.read('noun.txt').split.freeze
VERBS = File.read('verb.txt').split.freeze
ADJECTIVES = File.read('adject.txt').split.freeze
ADVERBS = File.read('adverb.txt').split.freeze

text = File.read('text.txt').split

def madlib_word(word)
  case word
  when PLACEHOLDER[0]
    NOUNS.sample
  when PLACEHOLDER[1]
    ADJECTIVES.sample
  when PLACEHOLDER[2]
    ADVERBS.sample
  when PLACEHOLDER[3]
    VERBS.sample
  end
end

def replace_word(word)
  temp = word.delete(PUNCTUATION.join)
  punc = word.chars - temp.chars
  word = madlib_word(temp) if PLACEHOLDER.include?(temp)
  word + (!punc.empty? ? punc.join : '')
end
text.map! do |word|
  replace_word word
end

puts text.join(' ')
