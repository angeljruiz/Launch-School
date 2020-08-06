def reverse(arr)
  half = arr.size / 2
  half.times do |i|
    arr[i], arr[-i - 1] = arr[-i - 1], arr[i]
  end
  arr
end

def reverse2(arr)
  new_arr = []
  arr.reverse_each { |item| new_arr << item }
  new_arr
end

list = %w(a b c d e)
puts reverse2 list
