# Given the tuple below that represents the Imelda May album "More Mayhem", write
# code to print the album details, followed by a listing of all the tracks in the album.
#
# Indent the tracks by a single tab stop when printing them (remember that you can pass
# more than one item to the print function, separating them with a comma).

imelda = "More Mayhem", "Imelda May", 2011, (
     (1, "Pulling the Rug"), (2, "Psycho"), (3, "Mayhem"), (4, "Kentish Town Waltz"))

print(imelda)

title, artist, year, tracks = imelda
print(title)
print(artist)
print(year)
for track in tracks:
  # print('\t', track)
  trackNumber, song = track
  print('\t {}. {}'.format(trackNumber, song))
  # print(str(trackNumber) + '. ' + song, sep='\t')
  # print(song, sep='\t')