def rotate_array(arr)
  arr << arr.shift
end

def rotate_rightmost_digits(num, amount)
  num = num.to_s.chars
  num[-amount..-1] = rotate_array(num[-amount..-1])
  num.join.to_i
end

def max_rotation(num)
  num = num.to_s.chars
  (num.size - 1).times do |n|
    num[n..-1] = rotate_array(num[n..-1])
  end
  num.join.to_i
end

puts max_rotation(735_291)
puts max_rotation(3)
puts max_rotation(35)
puts max_rotation(105)
puts max_rotation(8_703_529_146)
