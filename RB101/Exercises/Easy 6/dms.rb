CONVERSION = 60
DEGREE = "\xC2\xB0".freeze

def dms(angle)
  degrees = angle.to_i
  minutes = (angle - degrees) * CONVERSION
  seconds = (minutes - minutes.to_i) * CONVERSION
  format("%i%s%02i'%02i\"", degrees, DEGREE, minutes, seconds)
end

puts dms(254.6)
