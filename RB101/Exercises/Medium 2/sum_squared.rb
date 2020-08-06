require_relative '../Easy 9/sequence'

def sum_square_difference(num)
  sequence = sequence(num)
  sum_squared = sequence.inject(:+)**2
  squared_sum = sequence.inject(0) { |sum, num| sum += num**2 }
  sum_squared - squared_sum
end

p sum_square_difference 100
