def balanced?(sentence)
  pairs = 0
  chars = sentence.chars
  chars.each do |char|
    return false if pairs < 0
    if char == '('
      pairs += 1
    elsif char == ')'
      pairs -= 1
    end
  end
  pairs.zero?
end

puts balanced?('What (is) this?') == true
puts balanced?('What is) this?') == false
puts balanced?('What (is this?') == false
puts balanced?('((What) (is this))?') == true
puts balanced?('((What)) (is this))?') == false
puts balanced?('Hey!') == true
puts balanced?(')Hey!(') == false
puts balanced?('What ((is))) up(') == false
