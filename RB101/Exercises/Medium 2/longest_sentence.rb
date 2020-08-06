PUNCTUATION = %w(. ! ?).freeze

def longest_sentence(str)
  lengths = []
  count = 0
  str.each do |sentence|
    puts sentence
    sentence.split.each do |_word|
      count += 1
    end
    lengths << count
    count = 0
  end
  lengths.sort[-1]
end

sentences = File.new('sentences.text').readlines('.')

puts longest_sentence(sentences)
