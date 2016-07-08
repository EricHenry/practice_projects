# create a list of items (you may use strings or numbers in the list),
# then create an iterator using the iter() function.
#
# use a for loop to loop "n" times, where "n" is the number of items in your list
# each time round the loop, use next() on your list to print the next item.
#
# hint: use the len() function rather than counting the number of items in he list.

list = [1, 4, 2, 4, 5, 2, 4, 1, 3, 5, 4, 6, 6, 2, 6, 1, 5, 1, 3, 4, 2, 4, 6, 1, 3, 4, 1]

iterableList = iter(list)

for i in range(0, len(list)):
    nextItem = next(iterableList)
    print(nextItem)
