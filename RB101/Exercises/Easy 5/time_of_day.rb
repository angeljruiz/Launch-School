MIN_IN_HOUR = 60
H_IN_DAY = 24
MIN_IN_DAY = MIN_IN_HOUR * H_IN_DAY
FORMAT = '%02d:%02d'.freeze

def trim_time(num, time)
  num -= time while num >= time
  num
end

def trim_hours(hours, num, negative)
  hours = 0
  while num >= MIN_IN_HOUR
    num -= MIN_IN_HOUR
    hours += 1
  end
  hours += 1 if negative
  [hours, num]
end

def get_hours_minutes(num)
  num = num.split(':')
  [num[0].to_i, num[1].to_i]
end

def time_of_day(num)
  hours = 0
  negative = num < 0
  num *= -1 if negative
  num = trim_time num, MIN_IN_DAY
  hours, num = trim_hours hours, num, negative
  if negative
    format FORMAT, H_IN_DAY - hours, MIN_IN_HOUR - num
  else
    format FORMAT, hours, num
  end
end

def after_midnight(time)
  hours, minutes = get_hours_minutes time
  hours = trim_time hours, H_IN_DAY
  hours * MIN_IN_HOUR + minutes
end

def before_midnight(time)
  hours, minutes = get_hours_minutes time
  hours.zero? ? -minutes : (H_IN_DAY - hours) * MIN_IN_HOUR - minutes
end

puts time_of_day(3000)
