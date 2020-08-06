ALPHABET = ('A'..'z').to_a.freeze

def replace(word)
  final_word = []
  word.each_char.with_index do |char, index|
    if ALPHABET.include? char
      final_word << char
    elsif ALPHABET.include? word[index - 1]
      final_word << ' '
    end
  end
  final_word.join('')
end

def cleanup(sentence)
  sentence = sentence.split ' '
  sentence.map! do |word|
    replace word
  end
  sentence.select { |word| !word.size.zero? }.join(' ')
end

p cleanup("---what's my +*& Line?")
