class Card
  SUITS = %w(Heart Diamond Club Spade).freeze
  RANKS = %w(Jack Queen King Ace).freeze

  def initialize(suit, rank)
    @suit = suit
    @rank = rank
  end

  def ace?
    @rank == 14
  end

  def value
    case @rank
    when 2..10
      @rank
    when 11..13
      10
    else
      11
    end
  end

  def rank
    if (2..10).cover?(@rank)
      @rank
    else
      RANKS[@rank - 11]
    end
  end

  def to_s
    "#{rank} of #{@suit}'s"
  end
end

class Deck
  def initialize
    @cards = []
    Card::SUITS.each do |suit|
      2.upto(14) do |rank|
        @cards << Card.new(suit, rank)
      end
    end
    @cards.shuffle!
  end

  def deal
    @cards.pop
  end

  def self.total(cards)
    total = cards.collect(&:value).inject(&:+)

    cards.each do |card|
      total -= 10 if card.ace? && total > 21
    end
    total
  end
end

class Participant
  attr_reader :cards

  def initialize
    @cards = []
  end

  def hit(card)
    cards << card
  end

  def show_cards
    @cards.join(', and ')
  end

  def total
    Deck.total(cards)
  end

  def busted?
    total > 21
  end
end

class Player < Participant
  def show_cards
    puts "You have the #{super}."
  end
end

class Dealer < Participant
  def show_cards
    puts "The dealer has the #{super}."
  end
end

class Game
  def initialize
    @deck = Deck.new
    @player = Player.new
    @dealer = Dealer.new
  end

  def deal_cards
    2.times do
      @player.hit(@deck.deal)
      @dealer.hit(@deck.deal)
    end
  end

  def show_all_cards
    @player.show_cards
    @dealer.show_cards
  end

  def player_turn
    puts ''
    loop do
      answer = ''
      loop do
        puts 'Do you want to (h) or (s)tay?'
        answer = gets.chomp.downcase
        break if %w(h s).include?(answer)
        puts 'Invalid input.'
      end
      @player.hit(@deck.deal)
      break if @player.busted? || answer == 's'
      @player.show_cards
    end
  end

  def dealer_turn
    loop do
      break if @dealer.total > 17
      @dealer.hit(@deck.deal)
    end
  end

  def show_result
    puts ''
    show_all_cards
    puts ''
    if (@player.busted? && @dealer.busted?) || @player.total == @dealer.total
      puts "It's a tie!"
    elsif @player.total > @dealer.total && !@player.busted?
      puts 'You win!'
    else
      puts 'You lose!'
    end
  end

  def start
    deal_cards
    show_all_cards
    player_turn
    dealer_turn
    show_result
  end
end

Game.new.start
