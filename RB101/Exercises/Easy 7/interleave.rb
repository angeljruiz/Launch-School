def interleave(arr1, arr2)
  new_arr = []
  arr1.size.times do |n|
    new_arr << arr1[n]
    new_arr << arr2[n]
  end
  new_arr
end

# puts interleave([1, 2, 3], ['a', 'b', 'c'])
