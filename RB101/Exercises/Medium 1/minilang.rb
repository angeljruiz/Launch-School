def minilang(str)
  stack = []
  register = index = 0
  str = str.split
  loop do
    if str[index].to_i.to_s == str[index]
      register = str[index].to_i
    elsif str[index] == 'PUSH'
      stack << register
    elsif str[index] == 'ADD'
      register += stack.pop
    elsif str[index] == 'SUB'
      register -= stack.pop
    elsif str[index] == 'MULT'
      register *= stack.pop
    elsif str[index] == 'DIV'
      register /= stack.pop
    elsif str[index] == 'ADD'
      register += stack.pop
    elsif str[index] == 'MOD'
      register %= stack.pop
    elsif str[index] == 'POP'
      register = stack.pop
    elsif str[index] == 'PRINT'
      puts register
    end
    index += 1
    break if index == str.size
  end
end

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')
