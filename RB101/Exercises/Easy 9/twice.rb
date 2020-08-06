def is_double?(num)
  stringify = num.to_s
  half = stringify.size / 2
  return false if num <= 10 || stringify.size.odd?
  half.times do |n|
    return false if stringify[n] != stringify[half + n]
  end
  true
end

def twice(num)
  is_double?(num) ? num : num * 2
end

puts twice(37) == 74
puts twice(44) == 44
puts twice(334_433) == 668_866
puts twice(444) == 888
puts twice(107) == 214
puts twice(103_103) == 103_103
puts twice(3333) == 3333
puts twice(7676) == 7676
puts twice(123_456_789_123_456_789) == 123_456_789_123_456_789
puts twice(5) == 10
