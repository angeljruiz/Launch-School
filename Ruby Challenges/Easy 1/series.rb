class Series
  def initialize(str)
    @str = str
  end

  def slices(n)
    raise ArgumentError.new('Slice longer than string') if n > @str.length

    start_index = 0
    stop_point = @str.length - n
    results = []

    while start_index <= stop_point
      results << @str.slice(start_index, n).split('').map(&:to_i)
      start_index += 1
    end

    results
  end
end
