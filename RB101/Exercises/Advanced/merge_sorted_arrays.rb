def merge(arr1, arr2)
  results = []
  index1 = index2 = 0
  while arr1[index1] || arr2[index2] do
    if arr1[index1] == nil
      results << arr2[index2]
      index2 += 1
    elsif arr2[index2] == nil
      results << arr1[index1]
      index1 += 1
    else
      if arr1[index1] < arr2[index2]
        results << arr1[index1]
        index1 += 1
      else
        results << arr2[index2]
        index2 += 1
      end
    end
  end
  results
end

p merge([1, 5, 9], [2, 6, 8]) == [1, 2, 5, 6, 8, 9]
p merge([1, 1, 3], [2, 2]) == [1, 1, 2, 2, 3]
p merge([], [1, 4, 5]) == [1, 4, 5]
p merge([1, 4, 5], []) == [1, 4, 5]
