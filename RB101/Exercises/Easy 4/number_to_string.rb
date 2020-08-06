CHARS = %w(0 1 2 3 4 5 6 7 8 9).freeze

def digit_to_char(int)
  CHARS[int]
end

def integer_to_string(num)
  output = ''
  digits = num.digits.reverse!
  digits.size.times do |i|
    output << digit_to_char(digits[i])
  end
  output
end

def signed_integer_to_string(num)
  negative = num < 0
  num *= -1 if negative
  str = integer_to_string num
  negative ? str.prepend('-') : str.prepend('+')
end

puts signed_integer_to_string 5000
