class Operation

end

class Minilang
  def initialize(command)
    @command = command
    @stack = []
    @register  = 0
  end

  def eval
    @command = command.split

    command.each do |operation|
      if operation.to_i.to_s == operation
        self.send('sto', operation)
      else
        self.send(operation.downcase)
      end
    end
  end

  private
  attr_reader :command, :stack, :register

  def push
    @stack << register
  end

  def pop
    @register = stack.pop
  end

  def print
    puts register
  end

  def add
    @register += stack.pop
  end

  def sub
    @register -= stack.pop
  end

  def multi
    @register *= stack.pop
  end

  def div
    @register /= stack.pop
  end

  def add
    @register += stack.pop
  end

  def mod
    @register %= stack.pop
  end

  def sto(num)
    @register = num.to_i
  end  
end

Minilang.new('-3 PUSH 5 SUB PRINT').eval
