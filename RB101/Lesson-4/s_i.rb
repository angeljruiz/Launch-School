def select_fruit hash
  hash.select { |item, value| value == 'Fruit' }
end

def double_numbers array
  array.map! { |item| item * 2 }
end

def double_odd_numbers array
  array.map.with_index { |item, index| if index.odd? then item*2 else item end }
end

def multiply array, multiplier
  array.map { |item| item*multiplier }
end


produce = {
  'apple' => 'Fruit',
  'carrot' => 'Vegetable',
  'pear' => 'Fruit',
  'broccoli' => 'Vegetable'
}

# p select_fruit produce
#
# my_numbers = [1, 4, 3, 7, 2, 6]
# double_numbers(my_numbers)
# p my_numbers
#
# my_numbers = [1, 4, 3, 7, 2, 6]
# p double_odd_numbers(my_numbers)  # => [2, 4, 6, 14, 2, 6]
#
# # not mutated
# p my_numbers

p my_numbers = [1, 4, 3, 7, 2, 6]
p multiply(my_numbers, 3) # => [3, 12, 9, 21, 6, 18]
