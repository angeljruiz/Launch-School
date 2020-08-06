def ascii_value(str)
  return 0 if str == ''
  str = str.chars
  str[0] = str[0].ord
  str.reduce do |sum, n|
    sum += n.ord
  end
end

puts ascii_value ''
