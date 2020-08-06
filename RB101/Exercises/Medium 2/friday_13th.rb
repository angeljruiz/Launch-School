require 'date'
require_relative '../Easy 4/leapyear'

DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].freeze
MONTH_CODE = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5].freeze
CENTURY_CODE = [4, 2, 0, 6, 4, 2, 0].freeze

def calculate_year_code(year)
  year = year.to_s.chars[2..3].join.to_i
  (year + (year / 4)) % 7
end

def calculate_century_code(year)
  case year
  when 1700..1799
    4
  when 1800..1899
    2
  when 1900..1999
    0
  when 2000..2099
    6
  when 2100..2199
    4
  when 2200..2299
    2
  else
    0
  end
end

def day_of_week(date)
  date = date.split '/'
  day = date[0].to_i
  month = date[1].to_i - 1
  year = date[2].to_i
  leap_year = leap_year?(year) ? -1 : 0
  (day + MONTH_CODE[month] + calculate_year_code(year) + calculate_century_code(year) + leap_year) % 7
end

def friday_13th2(year)
  count = 0
  12.times do |n|
    date = '01/' + (n + 1).to_s + '/' + year.to_s
    count += 1 if day_of_week(date) == 0
  end
  count
end

def friday_13th(year)
  count = 0
  thirteenth = Date.new(year, 1, 13)
  12.times do
    count += 1 if thirteenth.friday?
    thirteenth = thirteenth.next_month
  end
  count
end

puts friday_13th(1986)
