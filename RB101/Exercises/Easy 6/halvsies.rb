def halvsies(arr)
  half = arr.size / 2
  new_arr = [[], []]
  half = arr.size / 2 - 1 if arr.size.even?
  arr.size.times do |i|
    if i <= half
      new_arr[0] << arr[i]
    else
      new_arr[1] << arr[i]
    end
  end
  new_arr
end

p halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
p halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
p halvsies([5]) == [[5], []]
p halvsies([]) == [[], []]
