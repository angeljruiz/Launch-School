def running_total(arr)
  arr.size.times do |index|
    next if index.zero?
    arr[index] += arr[index - 1]
  end
  arr
end

p running_total([2, 5, 13])
p running_total([14, 11, 7, 15, 20])
p running_total([3])
p running_total([])
