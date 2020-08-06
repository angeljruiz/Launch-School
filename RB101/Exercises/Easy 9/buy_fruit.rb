def buy_fruit(list)
  groceries = []
  list.each do |item|
    item[1].times do
      groceries << item[0]
    end
  end
  groceries
end

puts buy_fruit([['apples', 3], ['orange', 1], ['bananas', 2]]) ==
     %w(apples apples apples orange bananas bananas)
