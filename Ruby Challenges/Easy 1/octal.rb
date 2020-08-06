class Octal
  def initialize(num)
    @num = num.gsub(/^0*/, '')
    @num = 0 if @num.chars.include?('9') || @num.chars.include?('8')
    @num = @num.to_i.to_s == @num ? @num.to_i : 0
  end

  def to_decimal
    factor = 0
    @num.digits.map do |digit|
      factor += 1
      digit * 8 ** (factor - 1)
    end.inject(&:+)
  end
end
