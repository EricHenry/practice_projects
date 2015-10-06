"""
	Mine - Print a list to the screen
	Theirs - This is the "nester.py" module, and it provides one function called
		print_lol() which prints lists that may or may not include nested lists.
"""
def print_lol(the_list):
	"""
		Mine - Recursively check if any element is a list. 
			Only print out items that are not lists.
		Theirs - This function takes a positional argument called "the_list", which is any
			python list (of, possibly nested lists). Each data item in the provided list
			is (recursively) printed to the screen on its own line.
	"""
	for each_item in the_list:
			if isinstance(each_item, list):
				print_lol(each_item)
			else:
				print(each_item)