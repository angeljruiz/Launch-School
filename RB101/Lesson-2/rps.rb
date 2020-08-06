VALID_CHOICES = ['rock', 'paper', 'scissors']
WIN = 1
LOSE = 0
TIE = 2

def prompt msg
  puts ">> #{msg}"
end

choice = ''
comp_choice = VALID_CHOICES.sample
winner = TIE
loop do
  loop do
    prompt "Choose one: #{VALID_CHOICES.join(', ')}"
    choice = gets.chomp

    if VALID_CHOICES.include? choice then break
    else prompt "That's not a valid choice" end

  end

  winner = case choice
    when 'rock'
      if comp_choice == 'scissors' then WIN
      elsif comp_choice == 'rock' then TIE
      else LOSE end
    when 'paper'
      if comp_choice == 'rock' then WIN
      elsif comp_choice == 'paper' then TIE
      else LOSE end
    when 'scissors'
      if comp_choice == 'paper' then true
      elsif comp_choice == 'scissors' then TIE
    else LOSE end
  end

  puts "You chose #{choice}. The computer chose #{comp_choice}."

  case winner
    when WIN
        prompt 'You win!'
      when TIE
        prompt 'You tie!'
      when LOSE
        prompt 'You lose!'
  end

  prompt 'Do you want to play again? (y/n)'
  break unless gets.chomp.downcase == 'y'

end
