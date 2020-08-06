class PigLatin
  VOWELS = %w(a e i o).freeze
  SEMI_VOWELS = %w(x y u).freeze

  def self.translate(phrase)
    phrase.split.map { |word| translate_word(word) }.join(' ')
  end

  def self.translate_word(word)
    result = ''
    append = ''
    found = false
    word.each_char.with_index do |char, index|
      if !found && VOWELS.include?(char)
        found = true
      end
      if !found && SEMI_VOWELS.include?(char) && !VOWELS.include?(word[index + 1])
        found = true
      end
      if found
        result << char
      else
        append << char
      end
    end
    result << append << 'ay'
  end
end
