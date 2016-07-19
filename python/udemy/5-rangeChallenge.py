# Experiment with different ranges and slices to get a feel for how they work.
# Remember that you can print the range as wel as iterating through it to print
# its values, to check tht your ranges are what you expected
# You may also want to include things like:
#
# range(start, end, step)
#
o = range(0, 100, 4)
print(o)

p = o[::5] #the square brakets around the range allows you to calculate a new start end and step for that range. (all based on the original range)
print(p)

for i in p:
  print(i)

#if you start on a new index it gets multiplied by the original index / step combo
# so q will start at 1 * 4
#   4 is the first step after 0 based on the original range
# q's steps is multiplied by the original step
#   so q's steps = 3 * 4
# the end value also gets multiplied by the original step
#   so q's end = 12 * 4
#
# therefore printing q will give you a range that looks like the following:
#   range(4, 48, 12)
q = o[1:12:3]
print(q)

for i in q:
  print(i)