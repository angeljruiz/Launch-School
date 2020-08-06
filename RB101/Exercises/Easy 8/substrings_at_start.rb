def substrings_at_start(str)
  result = []
  str.each_char.with_index do |_char, index|
    result << str.slice(0..index)
  end
  result
end
