class FixedArray
  def initialize(size)
    @buffer = [nil] * size
  end

  def [](index)
    if index > 0
      raise IndexError if index >= buffer.size
      buffer[index]
    else
      raise IndexError if index <= -buffer.size
      buffer[buffer.size + index]
    end
  end

  def []=(index, value)
    if index >= 0
      raise IndexError if index >= buffer.size
      @buffer[index] = value
    else
      raise IndexError if index <= -buffer.size
      @buffer[buffer.size + index] = value
    end
  end

  def to_s
    buffer.to_s
  end

  def to_a
    buffer
  end

  private
  attr_accessor :buffer
end

fixed_array = FixedArray.new(5)
puts fixed_array[3] == nil
puts fixed_array.to_a == [nil] * 5

fixed_array[3] = 'a'
puts fixed_array[3] == 'a'
puts fixed_array.to_a == [nil, nil, nil, 'a', nil]

fixed_array[1] = 'b'
puts fixed_array[1] == 'b'
puts fixed_array.to_a == [nil, 'b', nil, 'a', nil]

fixed_array[1] = 'c'
puts fixed_array[1] == 'c'
puts fixed_array.to_a == [nil, 'c', nil, 'a', nil]

fixed_array[4] = 'd'
puts fixed_array[4] == 'd'
puts fixed_array.to_a == [nil, 'c', nil, 'a', 'd']
puts fixed_array.to_s == '[nil, "c", nil, "a", "d"]'

puts fixed_array[-1] == 'd'
puts fixed_array[-4] == 'c'

begin
  fixed_array[6]
  puts false
rescue IndexError
  puts true
end

begin
  fixed_array[-7] = 3
  puts false
rescue IndexError
  puts true
end

begin
  fixed_array[7] = 3
  puts false
rescue IndexError
  puts true
end
