ALPHABET = ('A'..'z').to_a.freeze

def staggered_case(str)
  result = ''
  flag = 0
  str.each_char do |char|
    if !ALPHABET.include? char || char == ' '
      result << char
    elsif flag.zero?
      result << char.upcase
      flag = 1
    else
      result << char.downcase
      flag = 0
    end
  end
  result
end

puts staggered_case('I Love Launch School!') == 'I lOvE lAuNcH sChOoL!'
puts staggered_case('ALL CAPS') == 'AlL cApS'
puts staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 nUmBeRs'
