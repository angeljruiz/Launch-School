def has_duplicates?(num)
  num = num.to_s
  num.each_char do |digit|
    return true if num.count(digit) > 1
  end
  false
end

def featured(num)
  multiple = 1
  featured = 0
  loop do
    featured = 7 * multiple
    multiple += 2
    return 'Error' if featured > 9_876_543_210
    next if featured <= num
    break unless has_duplicates?(featured)
  end
  featured
end

puts featured(9_999_999_999)
