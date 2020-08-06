NUM_NAMES = %w(zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen).freeze

def alphabetic_number_sort(arr)
  arr.sort_by { |item| NUM_NAMES[item.to_i] }
end

puts alphabetic_number_sort((0..19).to_a)
