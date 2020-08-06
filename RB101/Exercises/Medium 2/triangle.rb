def triangle2(first, second, third)
  sides = [first, second, third]
  sides.sort!
  return :invalid if sides[0] + sides[1] <= sides[2]
  return :invalid if first.zero? || second.zero? || third.zero?
  if first == second && second == third
    :equilateral
  elsif first != second && first != third && second != third
    :scalene
  else
    :isosceles
  end
end

def triangle(first, second, third)
  sides = [first, second, third]
  sides.sort!
  return :invalid if sides.inject(:+) != 180 || sides.include?(0)
  if sides[2] < 90
    :acute
  elsif sides[2] > 90
    :obtuse
  else
    :right
  end
end

puts triangle(60, 70, 50) == :acute
puts triangle(30, 90, 60) == :right
puts triangle(120, 50, 10) == :obtuse
puts triangle(0, 90, 90) == :invalid
puts triangle(50, 50, 50) == :invalid
