class CircularQueue
  def initialize(size)
    @oldest = nil
    @newest = nil
    @queue = Array.new(size)
  end

  def enqueue(obj)
    @newest ||= -1
    @newest += 1
    @newest = 0 if newest == queue.size
    queue[newest] = obj
    @oldest += 1 if newest == oldest && queue.size != 1
    @oldest ||= 0
    @oldest = 0 if oldest == queue.size
  end

  def dequeue
    return unless oldest && queue[oldest]
    value = queue[oldest]
    queue[oldest] = nil
    @oldest += 1
    @oldest = 0 if oldest == queue.size
    value
  end

  def to_s
    queue.to_s
  end

  private
  attr_reader :oldest, :newest, :queue
end

queue = CircularQueue.new(3)
puts queue.dequeue == nil

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
puts queue.dequeue
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue

queue = CircularQueue.new(4)
puts queue.dequeue

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
puts queue.dequeue == 4
puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue == nil
