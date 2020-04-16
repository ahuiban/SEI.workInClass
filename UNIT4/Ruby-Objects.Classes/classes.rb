# puts "Andrei Huiban".class.superclass

# puts "Andrei Huiban".upcase

# p "desert".reverse
# p "desert".reverse.upcase

#_____________

# class String
#   def is_palindrome?
#     word = self.downcase.gsub " ", ""
#     word == word.reverse
#   end
# end
# p "a Toyota".is_palindrome?
# p "Sit on a potato pan Otis".is_palindrome?

#_______________

#xercise: Create you own is_uppercase? 
#method for String which checks if self.upcase == self, and test with a couple strings.
#>>>>>

# class String
#     def is_uppercase?
#         self.upcase == self
#     end
# end

# p "UPPER".is_uppercase?
# p "Super".is_uppercase?

#_______________________

#Make our own objects

# class World
# def name
# "Nothing But Shrimp"
# end
# end

# world1 = World.new

# p world1
# p world1.name
# p world1.class

#_____

# Make a class called Galaxy that has a name and name=value method similar to above. 
#In the initialize method, have the name set to "Andromeda". 
#Make a new Galaxy, test that the name is "Andromeda", set it to "Milky Way", and make sure it updates.


class Galaxy
    def initialize
        @name = "Andromeda"
    end

    def name
        @name
    end

    def name=value_name
        @name=value_name
end
end

galaxy1 = Galaxy.new
galaxy1.name = "Milky Way"

p galaxy1.name







