def prompt(msg)
  puts "> #{msg}"
end 

prompt 'Enter a number'
first = gets.chomp.to_i
prompt 'Enter another number'
second = gets.chomp.to_i
prompt = <<-MSG
Enter an operation
1) Add
2) Subtract
3) Multiply
4) Divide
MSG
prompt prompt
op = gets.chomp.to_i
res = case op
when 1
  first+second
when 2
  first-second
when 3
  first*second
when 4
  first/second.to_f
end
prompt res
