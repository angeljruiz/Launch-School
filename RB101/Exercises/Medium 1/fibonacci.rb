def fibonacci(num)
  return 1 if num == 1 || num == 2
  fibonacci(num - 1) + fibonacci(num - 2)
end

def fibonacci_pro(nth)
  num1 = num2 = 1
  (nth - 2).times do
    num2, num1 = num1 + num2, num2
  end
  num2
end

def fibonacci_last(nth)
  fibonacci_pro(nth).to_s[-1].to_i
end

puts fibonacci_last(100_001)
