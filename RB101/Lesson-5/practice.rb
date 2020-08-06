def get_id
  p = '0123456789abcdef'
  id = ''
  32.times do |index|
    if %w(8 12 16 20).include? index.to_s
      id << '-'
    else id << p.chars.sample end
  end
  id
end


arr = ['10', '11', '9', '7', '8']


arr.sort! { |a,b| b.to_i <=> a.to_i }

# p arr


books = [
  {title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967'},
  {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925'},
  {title: 'War and Peace', author: 'Leo Tolstoy', published: '1869'},
  {title: 'Ulysses', author: 'James Joyce', published: '1922'}
]

books.sort_by! do |k|
  k[:published]
end

# p books

arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]]
# p arr1[2][1][3]

arr2 = [{first: ['a', 'b', 'c'], second: ['d', 'e', 'f']}, {third: ['g', 'h', 'i']}]
# p arr2[1][:third][0]

arr3 = [['abc'], ['def'], {third: ['ghi']}]
# p arr3[2][:third][0][0]

hsh1 = {'a' => ['d', 'e'], 'b' => ['f', 'g'], 'c' => ['h', 'i']}
# p hsh1['b'][1]

hsh2 = {first: {'d' => 3}, second: {'e' => 2, 'f' => 1}, third: {'g' => 0}}
# p hsh2[:third].key 0


arr1 = [1, [2, 3], 4]
arr1[1][1] = 4
# p arr1
arr2 = [{a: 1}, {b: 2, c: [7, 6, 5], d: 4}, 3]
arr2[2] = 4
# p arr2
hsh1 = {first: [1, 2, [3]]}
hsh1[:first][2][0] = 4
# p hsh1
hsh2 = {['a'] => {a: ['1', :two, 3], b: 4}, 'b' => 5}
hsh2[['a']][:a][2] = 4
# p hsh2

munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

# p munsters.select { |_,v| v['gender'] == 'male'}.inject(0) { |k ,v| k += v[1]['age'] }

munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

# munsters.each { |k,v| puts "#{k} is a #{v['age']}-year-old #{v['gender']}" }

hsh = {first: ['the', 'quick'], second: ['brown', 'fox'], third: ['jumped'], fourth: ['over', 'the', 'lazy', 'dog']}
VOWELS = 'aeiou'

hsh.each do |_,v|
  vowels = []
  for str in v do
    0..str.size.times do |index|
      vowels << str[index] if VOWELS.include? str[index]
    end
  end
  # p vowels.join ''
end

arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']]
sorted = []
for item in arr do
  sorted << item.sort { |a, b| b <=> a }
end
# p sorted

# p [{a: 1}, {b: 2, c: 3}, {d: 4, e: 5, f: 6}].map { |item| item.map { |k,v| [k,v+1] }.to_h }

arr = [[2], [3, 5, 7], [9], [11, 13, 15]]
# p arr.map { |sub| sub.select { |item| item % 3 == 0 }}

arr = [[:a, 1], ['b', 'two'], ['sea', {c: 3}], [{a: 1, b: 2, c: 3, d: 4}, 'D']]
# p arr.each_with_object({}) { |sub, hash| hash[sub[0]] = sub[1] }

arr = [[1, 6, 7], [1, 4, 9], [1, 8, 3]]

arr.sort do |a,b|
  a.inject(0) do |total, item|
    total += item if item.odd?
    total
  end <=> b.inject(0) do |total, item|
    total += item if item.odd?
    total
  end
end

p arr.sort_by { |sub| sub.select { |item| item.odd? }}

hsh = {
  'grape' => {type: 'fruit', colors: ['red', 'green'], size: 'small'},
  'carrot' => {type: 'vegetable', colors: ['orange'], size: 'medium'},
  'apple' => {type: 'fruit', colors: ['red', 'green'], size: 'medium'},
  'apricot' => {type: 'fruit', colors: ['orange'], size: 'medium'},
  'marrow' => {type: 'vegetable', colors: ['green'], size: 'large'},
}
arr = []

hsh.each do |produce|
  arr << (produce[1][:type] == 'fruit'? produce[1][:colors].map { |item| item.capitalize } : produce[1][:size].upcase )
end

p arr


arr = [{a: [1, 2, 3]}, {b: [2, 4, 6], c: [3, 6], d: [4]}, {e: [8], f: [6, 10]}]

arr.select! do |item|
  item.all? { |sub| sub[1].all? { |num| num.even? } }
end

p arr

p get_id
