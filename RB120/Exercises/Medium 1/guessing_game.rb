class GuessingGame
  def initialize(low, high)
    @attempts = nil
    @number = nil
    @answer = nil
    @high = high
    @low = low
    @max_attempts = Math.log2(high - low + 1).to_i + 1
  end

  def play
    new_game
    loop do
      print_attempts
      guess
      break if check_answer
      break if increment_attempts
    end
    puts 'You guessed right!!' if answer == number
    puts "You have no more guesses" if attempts == max_attempts
  end

  private

  attr_reader :attempts, :number, :answer, :high, :low, :max_attempts

  def check_answer
    if answer == number
      true
    else
      print_results
      false
    end
  end

  def print_attempts
    puts "You have #{max_attempts - attempts} attempts remaining."
  end

  def increment_attempts
    @attempts += 1
    attempts == max_attempts
  end

  def print_results
    if answer > number
      puts "You're too high!"
    else
      puts "You're too low!"
    end
    puts ''
  end

  def new_game
    @attempts = 0
    @number = rand(low..high)
    puts ''
  end

  def guess
    answer = nil
    loop do
      puts 'Enter your guess (1-100):'
      answer = gets.chomp
      break if answer.to_i.to_s == answer && (1..100).cover?(answer.to_i)
      puts 'Invalid input.'
    end
    @answer = answer.to_i
  end
end
GuessingGame.new(501, 1500).play
