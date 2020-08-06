def word_cap(str)
  str = str.split ' '
  str.map do |word|
    word.upcase!
    1.upto(word.size - 1) do |n|
      word[n] = word[n].downcase
    end
    word
  end
  str.join(' ')
end

def word_cap2(str)
  str.split(' ').map(&:capitalize).join(' ')
end

puts word_cap('four score and seven') == 'Four Score And Seven'
puts word_cap('the javaScript language') == 'The Javascript Language'
puts word_cap('this is a "quoted" word') == 'This Is A "quoted" Word'
