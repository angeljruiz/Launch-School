require 'socket'
require 'resolv'

PLAYER = 1
COMPUTER = 2
EMPTY = 0

player = 0 # network player
new_game = false
hosting = false

def hosting?
  loop do
    puts 'Client or server? (c/s)'
    input = gets.chomp.downcase[0]
    return input[0] == 's' if %w(c s).include? input
  end
end

def verify_address
  loop do
    puts 'Enter address'
    input = gets.chomp
    next unless !!(input =~ Resolv::IPv4::Regex)

    return input
  end
end

def connect_client
  server = TCPServer.new 2000
  server.accept
end

def connect(addr)
  TCPSocket.new addr, 2000
end

def create_board
  board = []
  3.times { board.push([0, 0, 0]) }
  board
end

def next_move
  input = ''

  loop do
    puts 'Enter your next move! e.g 3 3 for the bottom right tile'
    input = gets.strip

    if input.size != 3
      puts 'Invalid input!'
      next
    end

    input = [input[0].to_i - 1, input[2].to_i - 1]

    if (input[0].negative? || input[0] > 2) || (input[1].negative? || input[1] > 2)
      puts 'Invalid range!'
      next
    else
      break
    end
  end

  input
end

def valid?(board, move)
  board[move[1]][move[0]] == EMPTY
end

def display_board(board)
  board.each do |row|
    p row
  end
end

def winner?(board, player)
  a = 0
  b = 2
  board.each do |row| # check rows
    count = row.select { |item| item == player }.reduce(:+)
    return true if count == player * 3
  end
  count = 0
  3.times do |index| # check columns
    3.times do |i|
      count += 1 if board[i][index] == player
    end
    return true if count == 3

    count = 0
  end
  count = (0..2).map { |index| board[index][index] }.select { |i| i == player }.reduce(:+) # check main diagonal
  return true if count == player * 3

  count = (0..2).map do |_|
    a += 1
    b -= 1
    board[a - 1][b + 1]
  end
  count = count.select { |i| i == player }.reduce(:+) # check other diagonal
  count == player * 3
end

def tie?(board)
  board.each do |row|
    row.each do |i|
      return false if i == EMPTY
    end
  end
  true
end

def computer_move(board)
  move = []
  loop do
    move = [rand(0..2), rand(0..2)]
    break if valid?(board, move)
  end
  board[move[1]][move[0]] = COMPUTER
end

board = create_board

if (hosting = hosting?)
  player = connect_client
else
  player = connect 'localhost'
  system 'cls'
  puts 'Waiting for player'
  move = eval player.gets.chomp
  board[move[1]][move[0]] = COMPUTER
end

system('cls')

loop do
  if new_game
    board = create_board
    new_game = false
    if !hosting
      puts 'Your opponent takes its turn.'
      move = eval player.gets.chomp
      board[move[1]][move[0]] = COMPUTER
    end
  end

  display_board board

  loop do
    move = next_move
    while !valid?(board, move)
      puts 'Move not valid!'
      move = next_move
    end
    player.puts move.to_s

    board[move[1]][move[0]] = PLAYER
    display_board board
    if winner?(board, PLAYER)
      puts 'You win!'
      sleep(3)
      break
    end

    if tie?(board)
      puts 'Tie game!'
      sleep(3)
      break
    end

    system('cls')

    puts 'Your opponent takes its turn.'
    move = eval player.gets.chomp
    board[move[1]][move[0]] = COMPUTER
    display_board board

    if winner?(board, COMPUTER)
      puts 'Your opponent won!'
      sleep(3)
      break
    end

    if tie?(board)
      puts 'Tie game!'
      break
    end
  end
  new_game = true
  system('cls')
  puts 'Do you want to continue? y/n'
  break if gets.chomp.downcase[0] != 'y'
end
player.close
