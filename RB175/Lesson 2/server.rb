require 'socket'

server = TCPServer.new('localhost', 3003)

def parse_request(request_line)
  method, path, version = request_line.split
  path, params = path.split('?')

  params = params.split('&').each_with_object({}) do |pair, hash|
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
  client.puts "<h1> Rolls! </h1>"
  params['rolls'].to_i.times do
    client.puts "<p>"
    client.puts rand(params['sides'].to_i) + 1
    client.puts "</p>"
  end

  client.puts "</body>"
  client.puts "</html>"

  client.close
end
