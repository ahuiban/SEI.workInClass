#single comment
#long_variable_name = 1 #declare a variable
#puts("hi") #instead of console.log
# "ruby basics.rb" to call it and you will see "hi"

#>here it waits for you to give a command in terminal (it will repeat what you type)
#command_line = gets
#puts command_line


#>here it will tell the length or zise of the word > nr. of letters
#puts "Ruby".size 
#puts "Pythin".length


#here is string interpolation; running the file, you'll see "oh hai bar"
#foo = "bar"
#puts "oh hai #{foo}"


#>> HERE you will see "first line second line whatever"
#long_string = <<-EOF
#first line
#second line
#whatever
#EOF
#puts long_string


#Booleans
#Ruby booleans work essentially the same as in JavaScript:
#a = false
#b = true
#p a && b #false
#p a || b #true




#Integers
#puts does some interesting things to numbers. These are consistent, but somewhat different from the interesting things that JavaScript does.
#puts 5 / 2 #rounds
#puts 122 #normal
#puts 0x7a #hex value
#puts 0172 #octal
#puts 0b1111010 #binary
#puts 23_482_345_629 #long numbers: substitute _ for ,


#puts 1.2 - 1.0



#require 'bigdecimal'
#puts BigDecimal("1.2") - BigDecimal("1.0")




#Arrays
#a = [1,4,6]
#puts a - will list 1,4,6
#p a - will list [1,4,6]

#a = [1,4,6]
#b = Array(1..6) # 1-6 - called a range
#c = Array(1...6) # 1-5 (all numbers up to, but **not including** the second one)
#p a
#p b
#p c




#Hashes
#Ruby hashes are essentially like JS objects, but without methods:

#domains = { 'location' => "United States" } #could do this
#domains = { :location => "United States" } #better to do this

#domains = { 'de' => "Germany", 1 => "Slovakia", :us => "United States" }
#p domains
#p domains['de']
#p domains[1]
#p domains[:us]




# Conversion
# With Ruby, we can easily convert between data types:

# p '4'.to_i #to integer
# p 4.to_s #to string
# p 5.to_f #to float
# p 0.5.to_r #to rational
# p "Jane".to_sym #to symbol



# Methods
# In Ruby, methods are not objects like they are in JavaScript:

# def h
# 	puts 'Hello World!'
# end
# h()
# h # also calls the function
# h.class # NilClass
# with params:

# def h(name)
# 	puts "Hello #{name}!"
#end
# h("Matt")
# h "Matt"


#>>>>>>>Exercise 1<<<<<<<
# Create an if/elsif/else conditional that prints "too long" if 
# a string is longer than 10 characters, "just right" if it is between 
# 5 and 10 characters 
# (inclusive), and "too short" if it is less than 5 characters.


# a = "Andrei"
# if a.size > 10
#     p 'greater than 1'
# elsif a.size > 5 && a.size < 10
#     p 'just right'
# else
#     p 'too short'
# end

#>>>>>>>Exercise 2<<<<<

#Create a loop that prints "1st time through", 
#"2nd time through", ..., until the 10th time.


# for i in 0..10 do
#     p "#{i} times through"
# end


#>>>>>>>>>Exercise 3<<<<<<
#Create a for loop that prints all numbers (inclusive) from 20 through 40.

# for i in 20..40 do
#     p i
# end 



#>>>>>>>>>>>>>><<<<<<<<<<<<



