def fibonacci(numbers)
  numbers[0], numbers[1] = numbers[1], numbers[0] + numbers[1]
end

def find_fibonacci_index_by_length(len)
  numbers = [1, 1]
  index = 2
  loop do
    fibonacci numbers
    index += 1
    break unless numbers[1].digits.size <= len
  end
  index
end

puts find_fibonacci_index_by_length(1000)
