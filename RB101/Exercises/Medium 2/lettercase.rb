ALPHABET = ('A'..'z').freeze

def letter_percentages(sentence)
  lettercases = { uppercase: 0, lowercase: 0, neither: 0 }
  count = sentence.chars.size.to_f
  sentence.chars.each do |char|
    if !ALPHABET.include?(char)
      lettercases[:neither] += 1
    elsif char == char.upcase
      lettercases[:uppercase] += 1
    else
      lettercases[:lowercase] += 1
    end
  end
  lettercases[:uppercase] = lettercases[:uppercase] / count * 100
  lettercases[:lowercase] = lettercases[:lowercase] / count * 100
  lettercases[:neither] = lettercases[:neither] / count * 100
  lettercases
end

puts letter_percentages('abCdef 123') == { lowercase: 50, uppercase: 10, neither: 40 }
puts letter_percentages('AbCd +Ef') == { lowercase: 37.5, uppercase: 37.5, neither: 25 }
puts letter_percentages('123') == { lowercase: 0, uppercase: 0, neither: 100 }
