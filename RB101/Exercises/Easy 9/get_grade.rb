def get_letter(num)
  case num
  when 90..100
    'A'
  when 80..89
    'B'
  when 70..79
    'C'
  when 60..69
    'D'
  else
    'F'
  end
end

def get_grade(first, second, third)
  get_letter (first + second + third) / 3
end

puts get_grade(95, 90, 93) == 'A'
puts get_grade(50, 50, 95) == 'D'
