def prompt(msg)
  puts ">> #{msg}"
end

def leap_year?(year)
  return -1 if year <= 0
  if year < 1752
    (year % 4).zero?
  else
    (year % 400).zero? || ((year % 4).zero? && !(year % 100).zero?)
  end
end
