DIGITS = %w(0 1 2 3 4 5 6 7 8 9).freeze

def char_to_integer(char)
  DIGITS.find_index(char)
end

def string_to_integer(str)
  multiplier = str.size
  output = 0
  str.each_char do |char|
    output += char_to_integer(char) * 10**(multiplier - 1)
    multiplier -= 1
  end
  output
end

def string_to_signed_integer(str)
  negative = false
  case str[0]
  when '-', '+'
    negative = true if str[0] == '-'
    str.delete_prefix! str[0]
  end
  negative ? -1 * string_to_integer(str) : string_to_integer(str)
end

puts string_to_signed_integer '8675309'
