flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]
hash = {}
flintstones.each_with_index { |item, index| hash[item] = index }

p hash

ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
total = 0
ages.values.each { |key| total += key }

p total

ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }

ages.delete_if { |_, v| v > 100 }

p ages

ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
min_age = nil

ages.values.each do |v|
  min_age ||= v
  min_age = v if v < min_age
end

p min_age

# or ages.values.min...

flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
index = 0
flintstones.each_with_index { |k, i| index = i if k[0..1] == 'Be' }

p index

flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)

p flintstones.map { |k| k[0..2] }

statement = "The Flintstones Rock"
hash = {}
statement.chars.each do |k|
   hash[k] ||= 0
   hash[k] += 1
end

p hash

def titleize str
  str.split.map { |k| k.capitalize }.join(' ')
end

p titleize 'hello this is a test'

munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

munsters.each do |k, v|
  p v['age']
  case v['age']
    when 0..17
      v['age_group'] = 'kid'
    when 18..64
      v['age_group'] = 'adult'
    else
      v['age_group'] = 'senior'
  end
end

p munsters
