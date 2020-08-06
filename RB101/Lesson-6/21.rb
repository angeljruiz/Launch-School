SUITS = ['heart', 'diamond', 'club', 'spade']
PLAYER = 0
DEALER = 1

def init_deck
  cards = []
  SUITS.each do |s|
    2.upto(14) do |i|
      cards.push "#{s}_#{i}"
    end
  end
  cards
end

def deal_card(deck)
  index = rand deck.size
  card = deck[index]
  deck.delete_at index
  card
end

def start_game(players, deck)
  players[:current_player] = PLAYER
  players[:dealer][:hand] = []
  players[:player][:hand] = []
  2.times do
    players[:dealer][:hand].push deal_card deck
    players[:player][:hand].push deal_card deck
  end
end

def card_name(card)
  card = card.split '_'
  value = card[1].to_i
  case value
  when 11
    value = 'jack'
  when 12
    value = 'queen'
  when 13
    value = 'king'
  when 14
    value = 'ace'
  end
  "#{value} of #{card[0]}'s"
end

def list_hand(hand)
  t = ''
  hand.each.with_index do |card, i|
    t += card_name card
    t += ', ' unless i == hand.size - 1
    t += 'and the ' if i == hand.size - 2
  end
  t
end

def hit?
  loop do
    puts 'Do you want to hit or stay? (h/s)'
    input = gets.chomp.downcase[0]
    return input == 'h' if %w(h s).include? input
    puts 'Invalid input'
  end
end

def total(hand)
  aces = 0
  total = 0
  hand.each do |card|
    value = card.split '_'
    value = value[1].to_i
    case value
    when 2..10
      total += value
    when 11..13
      total += 10
    else
      aces += 1
    end
  end
  aces.downto 1 do |i|
    if total + i * 11 < 21
      return total + i * 11
    else
      total += 1
    end
  end
  total
end

def player_turn(players, deck)
  puts "The dealer has the #{card_name players[:dealer][:hand][0]} and an unknown card"
  puts "You have the #{list_hand(players[:player][:hand])}"
  if (hit = hit?)
    card = deal_card deck
    players[:player][:hand].push card
    puts "You pick up the #{card_name(card)}"
    sleep 2
  end
  hit
end

def dealer_turn(players, deck)
  if total(players[:dealer][:hand]) < 17
    players[:dealer][:hand].push deal_card deck
    puts "The dealer picks up the #{card_name(players[:dealer][:hand].last)}"
    puts "The dealer now has #{list_hand(players[:dealer][:hand])}"
    sleep 2.5
    return true
  end
end

def taking_turn?(players, deck)
  if players[:current_player] == PLAYER
    player_turn players, deck
  else
    dealer_turn players, deck
  end
end

def swap_players(players)
  players[:current_player] == PLAYER ? players[:current_player] = DEALER : players[:current_player] = PLAYER
end

deck = init_deck
players = { player: { hand: [] }, dealer: { hand: [] }, current_player: PLAYER }
player = players[:player]
dealer = players[:dealer]

system 'cls'

start_game players, deck

loop do
  unless taking_turn? players, deck
    break if players[:current_player] == DEALER
    swap_players players
  end
  break if total(player[:hand]) > 21
  system 'cls'
end

playert = total player[:hand]
dealert = total dealer[:hand]

puts "The dealer has the #{list_hand(dealer[:hand])}"
puts 'The dealer busts!' if dealert > 21
puts "You have the #{list_hand(player[:hand])}"
puts 'The you bust!' if playert > 21

if playert < 21 && (dealert > 21 || playert > dealert)
  puts 'You win!'
else
  puts 'You lose!'
end
