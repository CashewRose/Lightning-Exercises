listing = ["Doom", "Merry", "Time", "Pop"]

def fun(list, num, string="Cookies"):
    for x in list:
        print(x)
        here = list[:num]
        for m in here:
            print( string + " " + m)

fun(listing, 2)
fun(listing, 1, "Money")