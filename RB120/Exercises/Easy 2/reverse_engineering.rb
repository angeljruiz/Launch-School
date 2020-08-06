class Transform
  attr_reader :message

  def self.lowercase(message)
    message.downcase
  end

  def initialize(message)
    @message = message
  end

  def uppercase
    message.upcase
  end

end

my_data = Transform.new('abc')
puts my_data.uppercase
puts Transform.lowercase('XYZ')
