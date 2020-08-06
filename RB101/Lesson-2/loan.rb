def prompt(msg)
  puts "> #{msg}"
end

def valid_num?(num)
  return num != 0
end

loan_amt = 0
monthly_pymt = 0
apr = 0
mpr = 0
loan_duration = 0

prompt 'Hello'
prompt "Please enter your loan amount"

loop do
  loan_amt = gets.chomp.to_i
  break if valid_num? loan_amt
  prompt 'Please enter a valid number'
end

prompt "Please enter your APR. For 3.3% you'd enter 3.3"
loop do
  apr = gets.chomp.to_f/100.0
  break if valid_num? apr
  prompt 'Please enter a valid number'
end

mpr = apr.to_f / 12.0

prompt "Please enter the loan duration in years"
loop do
  loan_duration = gets.chomp.to_f
  break if valid_num? loan_duration
  prompt 'Please enter a valid number'
end

loan_duration *= 12

monthly_pymt = loan_amt.to_i*(mpr/(1-(1+mpr)**(-loan_duration)))

prompt "Your monthly payment is #{monthly_pymt.round 2}"
