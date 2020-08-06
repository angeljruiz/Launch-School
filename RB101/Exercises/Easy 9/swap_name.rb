def swap_name(name)
  name = name.split
  format('%s, %s', name[1], name[0])
end

def swap_name2(name)
  name.split.reverse.join(', ')
end

puts swap_name('Joe Roberts') == 'Roberts, Joe'
