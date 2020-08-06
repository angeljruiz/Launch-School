class SecretHandshake
  COMMANDS = ['jump', 'close your eyes', 'double blink', 'wink'].freeze

  def initialize(num)
    @bin = to_binary num
    @bin = ("%5.5s" % @bin).gsub(' ', '0')
    @reverse = @bin[0] != '1'
    @bin.slice!(0)
  end

  def commands
    @bin = @bin.chars.map.with_index do |digit, index|
      if digit == '1'
        COMMANDS[index]
      else
        '!'
      end
    end
    @bin.reverse! if @reverse
    @bin.delete('!')
    @bin
  end

  private

  def to_binary(num)
    num = num.to_i if num.to_i.to_s == num
    return 0 unless num.to_s.to_i == num
    result = []
    divided = num.divmod(2)
    while !divided.first.zero?
      result << divided.last
      divided = divided.first.divmod(2)
    end
    result << 1
    result.join.reverse
  end
end

puts handshake = SecretHandshake.new('1').commands
