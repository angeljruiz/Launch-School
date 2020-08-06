BLOCKS = %w(B:O X:K D:Q C:P N:A
            G:T R:E F:S J:W H:U
            V:I L:Y Z:M).freeze

def block_word?(word)
  word = word.upcase.chars
  blocks = {}
  BLOCKS.each do |block|
    blocks[block] = false
    letters = block.split ':'
    if word.find_index letters[0]
      return false if blocks[block] || word.find_index(letters[1])
      blocks[block] = true
    end
  end
  true
end

puts block_word?('BATCH') == true
puts block_word?('BUTCH') == false
puts block_word?('jest') == true
