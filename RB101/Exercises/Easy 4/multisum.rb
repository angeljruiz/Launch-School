DIGITS = [3, 5].freeze

def prompt(msg)
  puts ">> #{msg}"
end

def multisum(num)
  multiples = [[], []]
  index = DIGITS[0]
  DIGITS.size.times do |i|
    while index <= num
      multiples[i] << index
      index += DIGITS[i]
    end
    index = DIGITS[i + 1]
  end
  (multiples[0] + multiples[1]).uniq.reduce(&:+)
end

prompt multisum 20
