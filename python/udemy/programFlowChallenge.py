ip = ''
while not ip:
    ip = input('please enter an I.P. address for me to validate: ')

ipNumbers = ''
periods = ''
numbersList = []

for char in ip:
    if char not in '.0123456789':
      print('ERROR: only numbers and periods are allowed. It seems you entered a \'{}\' character'.format(char))
      break;
    elif char == '.':
      periods += char
      if ipNumbers:
        numbersList.append(int(ipNumbers))
        ipNumbers = ''
    else:
      ipNumbers += char
else:
  if ipNumbers:
      numbersList.append(int(ipNumbers))
      ipNumbers = ''

  if len(numbersList) != 4 or len(periods) != 3:
    print('ERROR: You must have 4 groups of numbers separated by a period.')
  else:
    zeroCount = 0
    for number in numbersList:
        if number > 255 or number < 0:
            print('ERROR: all number sequences has to be between 0 and 255')
            break
        if number == 0:
            zeroCount += 1
        if zeroCount > 3:
            print('ERROR: ip cannot be 0.0.0.0')
            break
    else:
      print('ping {}'.format(ip))
