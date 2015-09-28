def print_lol(the_list):
	for each_item in the_list:
			if isinstance(each_item, list):
				print_lol(each_item)
			else:
				print(each_item)

movies = ["The Holy Grail", 1975, "Terry Jones & Terry Gilliam", 91, "The life of Brian",
			["Graham Chapman", ["Michael Palin", "John Cleese", "Terry Gilliam", "Eric Idle", "Terry Jones"]]];

print_lol(movies);

#fav_movies = ["The Holy Grail", "The life of Brian"];

#for each_flick in fav_movies:
#		print(each_flick);