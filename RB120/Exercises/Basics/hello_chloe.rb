class Cat
  attr_accessor :name

  COLOR = 'purple'

  @@total_cats = 0

  def self.generic_greeting
    puts "Hello! I'm a cat!"
  end

  def self.total
    @@total_cats
  end

  def initialize(name)
    @@total_cats += 1
    @name = name
  end

  def to_s
    "I'm #{name}"
  end

  def rename(name)
    self.name = name
  end

  def identify
    self
  end

  def greet
    puts "Hello! My name is #{name} and I'm a #{COLOR} cat!"
  end
end

kitty = Cat.new('Sohpie')
puts kitty
