def center_of(str)
  middle = if str.size.even?
             str.size / 2 - 1..str.size / 2
           else
             str.size / 2
           end
  str[middle]
end

puts center_of('I love ruby') == 'e'
puts center_of('Launch School') == ' '
puts center_of('Launch') == 'un'
puts center_of('Launchschool') == 'hs'
puts center_of('x') == 'x'
