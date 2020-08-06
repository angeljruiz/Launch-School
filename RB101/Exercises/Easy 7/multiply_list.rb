def multiply_list(arr1, arr2)
  results = []
  arr1.each.with_index do |item, index|
    results << item * arr2[index]
  end
  results
end

puts multiply_list([3, 5, 7], [9, 10, 11])
