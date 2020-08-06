TOP_LINE = "+-%s-+\n".freeze
MID_LINE = "| %s |\n".freeze

def print_in_box(sentence)
  lines = ['-' * sentence.size, ' ' * sentence.size]
  output = ''
  output << format(TOP_LINE, lines[0])
  output << format(MID_LINE, lines[1])
  output << format(MID_LINE, sentence)
  output << format(MID_LINE, lines[1])
  output << format(TOP_LINE, lines[0])
  output
end

puts print_in_box('To boldly go where no one has gone before.')
