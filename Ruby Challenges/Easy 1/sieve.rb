class Sieve
  def initialize(limit)
    @limit = limit
  end

  def primes
    results = generate_list
    index = 2
    multiple = nil

    while index <= @limit
      if !results[index]
        index += 1
        next
      end

      multiple = 2

      while index * multiple <= @limit
        results[index * multiple] = false

        multiple += 1
      end

      index += 1
    end

    results.select { |_, v| v }.map { |k, _| k }
  end

  private
  def generate_list
    results = {}

    2.upto(@limit) do |n|
      results[n] = true
    end

    results
  end
end
