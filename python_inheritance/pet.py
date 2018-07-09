# 1) Give a pet its own prop of name
# 2) Give it a property of animal_type
# 3) animal_type needs to be an instance of a dog
# 4) assign an owner via a method
# 5) __str__ return a string with pet's name, # of legs, and what it says

class Pet():
    def __init__(self, animal_type, name):
        self.name = name
        self.animal_type = animal_type

    def owner_assignment(self, owner_name):
        self.owner = owner_name

    def __str__(self):
        return f'My name is {self.name}. I have {self.animal_type.leg_num} legs. {self.animal_type.speak()}'