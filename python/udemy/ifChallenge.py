name = input('Please enter your name: ')
age = int(input('Please enter your age, {}: '.format(name)))
if 18 <= age < 31:
  print('Come party my peeps!')
else:
  print('sorry you can\'t come {}, you dummy.'.format(name))
