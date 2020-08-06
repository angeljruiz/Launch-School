require 'socket'

server = TCPServer.new('localhost', 3003)

def parse_request(request_line)
  method, path, version = request_line.split
  path, params = path.split('?')

  params = (params || '').split('&').each_with_object({}) do |pair, hash|
    key, value = pair.split('=')
    hash[key] = value
  end

  [method, path, params]
end

loop do
  client = server.accept

  request_line = client.gets
  next if !request_line || request_line =~ /favicon/
  puts request_line

  method, path, params = parse_request(request_line)

  client.puts "HTTP/1.1 200 OK"
  client.puts "Content-Type: text/html\r\n\r\n"

  client.puts "<html>"
  client.puts "<body>"

  client.puts "<h1>Counter</h1>"

  number = params['number'].to_i
  client.puts "<p>The current number is #{number}</p>"
  client.puts "<a href='?number=#{number + 1}'>Increase!</a>"
  client.puts "<a href='?number=#{number - 1}'>Decrease!</a>"


  client.puts "</body>"
  client.puts "</html>"

  client.close
end
