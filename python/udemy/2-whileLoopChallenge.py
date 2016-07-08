import random

highest = 10
answer = random.randint(1, highest) #includes 1 and 10

print("Please guess a number between 1 and {}: ".format(highest))
guess = 0

while guess != answer:
  guess = int(input())
  if guess == 0:
    print('You existed the game.')
    break
  elif guess < answer:
    print('Please guess higher.')
    continue
  elif guess > answer:
    print('Please guess lower')
    continue
  else:
    print('You guessed correctly!')