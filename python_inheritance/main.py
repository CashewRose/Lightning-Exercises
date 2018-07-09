# instantiate a new Dog and print out the results of making it speak
# Then...when you're done with making your Pet class
# Create an instance of the Pet class and compose the Dog instance into it by adding the dog as a property of the new Pet
# Add an owner by calling your pet's set_owner method (or whatever you called it)
# Print a human-readable output thanks to our the __str__ method you defined in Pet

from dog import Dog
from pet import Pet

woof = Dog("German Shepherd")
print(woof.speak())

scruf = Pet(woof, "Scruffy")
scruf.owner_assignment("Susan")

print(scruf)
