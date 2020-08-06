def remove_vowels(arr)
  [arr.to_s.delete('aeiouAEIOU')]
end

puts remove_vowels(%w(abcdefghijklmnopqrstuvwxyz))
puts remove_vowels(%w(green YELLOW black white))
puts remove_vowels(%w(ABC AEIOU XYZ))
