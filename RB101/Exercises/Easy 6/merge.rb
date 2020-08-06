def merge(first, second)
  (first + second).uniq
end

puts merge([1, 1, 2, 3], [3, 4, 5, 5])
