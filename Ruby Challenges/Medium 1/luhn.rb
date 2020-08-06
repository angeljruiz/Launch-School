class Luhn
  def initialize(num)
    @num = num
  end

  def addends
    results = @num.digits
    results.map.with_index do |digit, index|
      if index.odd?
        digit *= 2
        digit -= 9 if digit > 10
      end
      digit
    end.reverse
  end

  def checksum
    addends.inject(&:+)
  end

  def valid?
    checksum % 10 == 0
  end

  def self.create(num)
    t = Luhn.new(num * 10)
    return num * 10 if t.checksum % 10 == 0
    num * 10 + (10 - t.checksum % 10)
  end
end
