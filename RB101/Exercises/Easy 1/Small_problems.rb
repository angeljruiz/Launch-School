def sum num
  total = 0
  for i in num.to_s.chars do
    total += i.to_i
  end
  total
end

puts sum(23) == 5
puts sum(496) == 19
puts sum(123_456_789) == 45

puts "What's the bill?"
bill = gets.chomp.to_f
puts "What do you want to tip? e.g 15"
tip = gets.chomp.to_f/100*bill

puts "Your tip is #{tip} and the total is #{bill + tip}"

def xor?(l, r)
  (l || r) && !(l && r)
end

puts xor?(5.even?, 4.even?) == true
puts xor?(5.odd?, 4.odd?) == true
puts xor?(5.odd?, 4.even?) == false
puts  xor?(5.even?, 4.odd?) == false

def short_long_short str1, str2
  if str1.size > str2.size
    str2 + str1 + str2
  else
    str1 + str2 + str1
  end
end

p short_long_short('abc', 'defgh') == "abcdefghabc"
p short_long_short('abcde', 'fgh') == "fghabcdefgh"
p short_long_short('', 'xyz') == "xyz"

def century yr
  cen = 0
  while yr > 0 do
    yr -= 99
    cen += 1
  end
  if cen <= 3
    case cen
    when 0
      '1st'
    when 1
      '2nd'
    when 2
      '3rd'
    end
  else
    p cen.to_s + 'th'
  end
end

p century(2000) == '20th'
p century(2001) == '21st'
p century(1965) == '20th'
p century(256) == '3rd'
p century(5) == '1st'
p century(10103) == '102nd'
p century(1052) == '11th'
p century(1127) == '12th'
p century(11201) == '113th'

def multisum num
  sum = 0
  1.upto(num) do |i|
    sum += i if i % 3 == 0 || i % 5 == 0
  end
  sum
end


p multisum(3) == 3
p multisum(5) == 8
p multisum(10) == 33
p multisum(1000) == 234168

def running_total arr
  return [] if arr.size == 0
  sum = 0
  arr.map.with_index do |e, i|
    sum += e
  end
end

p running_total([2, 5, 13])
p running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
p running_total([3]) == [3]
p running_total([]) == []
