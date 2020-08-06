def toggle_lights(lights, select)
  select.each do |n|
    lights[n - 1] = !lights[n - 1]
  end
end

def multiples(max, multiple)
  results = []
  index = 1
  loop do
    break if multiple * index > max
    results << multiple * index
    index += 1
  end
  results
end

def lights(num)
  results = [true] * num
  final = []
  2.upto(num + 1) do |n|
    toggle_lights(results, multiples(num, n))
  end
  results.each_with_index { |light, index| final << index + 1 if light }
  final
end

p lights 1000
