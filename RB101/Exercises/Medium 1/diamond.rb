def diamond(num)
  spaces = (num - 1) / 2
  stars = 1
  (num / 2.0).ceil.times do |_n|
    puts format('%s%s%s', ' ' * spaces, '*' * stars, ' ' * spaces)
    stars += 2
    spaces -= 1
  end
  stars -= 2
  spaces += 1
  (num / 2.0).floor.times do |_n|
    stars -= 2
    spaces += 1
    puts format('%s%s%s', ' ' * spaces, '*' * stars, ' ' * spaces)
  end
end

diamond(9)
