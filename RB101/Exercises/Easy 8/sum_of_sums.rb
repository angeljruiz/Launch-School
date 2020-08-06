def sum_of_sums(arr)
  total = 0
  index = 0
  loop do
    arr[0..index].each do |item|
      total += item
    end
    index += 1
    break if index == arr.size
  end
  total
end

puts sum_of_sums([3, 5, 2]) == 3 + (3 + 5) + (3 + 5 + 2) # -> (21)
puts sum_of_sums([1, 5, 7, 3]) == 1 + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
puts sum_of_sums([4]) == 4
puts sum_of_sums([1, 2, 3, 4, 5]) == 35
