def reversed_number(num)
  num.to_s.reverse.to_i
end

puts reversed_number(12_345) == 54_321
puts reversed_number(12_213) == 31_221
puts reversed_number(456) == 654
puts reversed_number(12_000) == 21 # No leading zeros in return value!
puts reversed_number(12_003) == 30_021
puts reversed_number(1) == 1
