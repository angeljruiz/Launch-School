def triangle(num)
  num.times do |i|
    puts format('%s%s', ' ' * (num - i - 1), '*' * (i + 1))
  end
end

triangle 9
