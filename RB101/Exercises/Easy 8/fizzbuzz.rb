def fizzbuzz(start, ending)
  results = []
  start.upto(ending) do |n|
    results << if n % 15 == 0
                 'FizzBuzz'
               elsif n % 5 == 0
                 'Buzz'
               elsif n % 3 == 0
                 'Fizz'
               else
                 n
               end
  end
  results.join(', ')
end

puts fizzbuzz(1, 15)
