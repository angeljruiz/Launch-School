def swapcase(str)
  result = ''
  str.each_char do |char|
    result << if char == char.upcase
                char.downcase
              else
                char.upcase
              end
  end
  result
end

puts swapcase('CamelCase') == 'cAMELcASE'
puts swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'
