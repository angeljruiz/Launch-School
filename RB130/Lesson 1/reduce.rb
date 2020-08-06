def reduce(arr, initial = 0)
  total = initial
  arr.size.times do |i|
    total = yield(total, arr[i])
  end
  total
end

array = [1, 2, 3, 4, 5]

puts reduce(array) { |acc, num| acc + num }                    # => 15
puts reduce(array, 10) { |acc, num| acc + num }                # => 25
puts reduce(array) { |acc, num| acc + num if num.odd? }
