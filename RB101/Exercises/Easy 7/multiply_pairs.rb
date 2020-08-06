def multiply_all_pairs(arr1, arr2)
  results = []
  arr1.each do |first|
    arr2.each do |second|
      results << first * second
    end
  end
  results.sort
end

puts multiply_all_pairs([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]
