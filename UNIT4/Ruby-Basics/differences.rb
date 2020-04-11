#Ruby vs. Javascript - The Differences

#(1)
# Javascriptconst 
# getName = () => {
#     let name = prompt("what is your name?");
#     return name;
#   };

#Ruby
# def name
#     puts "what is your name"
# end
# name()

#(2)
# Reverse It
# Write a method that reverses a string. Here's the javascript:

#Javascript
# const reverseIt = () => {
#   let string = "a man, a plan, a canal, frenemies!";

#   let reverse = "";

#   for (let i=0; i < string.length; i++) {
#     reverse += string[string.length - (i+1)];
#   };

#   alert(reverse);
# };


#Ruby


# def reverse_it(sentence)
#     sentence.to_s.reverse
# end

# puts reverse_it("a man, a plan, a canal, frenemies!")

#>>>or longer way

# def reverse_it(string)
#     reverse = ""
#     for i in 0...string.length do
#         reverse = reverse + string[string.length - (i+1)]
#     end
#     return reverse
# end
# p reverse_it("a man, a plan, a canal, frenemies!")


#(3)
# Swap Em
# Write a method that swaps the values of two variables around. Here's the javascript:

#Javascript
# const swapEm = () => {
#   let a = 10;
#   let b = 30;
#   let temp;

#   temp = b;
#   b = a;
#   a = temp;

#   alert("a is now " + a + ", and b is now " + b);
# };

#Ruby

# def swap (a,b)
#     a = 10
#     b = 30
# temp = ""

#     temp = b
#     b = a
#     a = temp
#     puts "a is now #{a}, and b is now #{b}"
# end
# swap(1 , 2)



#(4)

# Multiply Array
# Write a method that multiplies all numbers in a given array and returns the final product. Here's the javascript:
# #Javascript

# const multiplyArray = (ary) => {
#   if (ary.length == 0) { return 1; };

#   let total = 1;
#   // let total = ary[0];

#   for (let i=0; i < ary.length; i++) {
#     total = total * ary[i];
#   };

#   return total;
# };

#Ruby

# def multiply_array ary
#     total = 1
#     if ary.size == 0
#         return 1
#     elsif ary.size > 0
#         ary.each do |i|
#             total *= i
#         end
#         p total
#     end
# end
# multiply_array([1,2,3,4])


#(5)

# Fizz Buzzer
# Write a method that takes a number argument and returns "fizz" 
#if the number is divisible by three, "buzz" if the number is divisible by five, 
#and "fizzbuzz" if it's divisible by both. Here's the javascript:
# #Javascript
# const fizzbuzzer = (x) => {
#   if( x%(3*5) == 0 ) {
#     return 'fizzbuzz'
#   } else if( x%3 == 0 ) {
#     return 'fizz'
#   } else if ( x%5 == 0 ) {
#     return 'buzz'
#   } else {
#     return 'archer'
#   }
# }


#Ruby

# def fizzbuzzer(x)
#     if x%(3*5) == 0
#         return 'fizbuzz'
#     elsif x%3 == 0
#             return 'fizz'
#     elsif x%5 == 0
#             return 'buzz'
#     else
#         return  'archer'
#     end
# end
# puts fizzbuzzer(15)


#(6)
### Nth Fibonacci 
# Write a method that finds the fibonacci number at the nth position and returns it. Here is the javascript:

# const nthFibonacciNumber = () => {
#   let fibs = [1, 1];
#   let num = prompt("which fibonacci number do you want?");
#   while (fibs.length < parseInt(num)) {
#     let length = fibs.length;
#     let nextFib = fibs[length - 2] + fibs[length - 1];
#     fibs.push(nextFib);
#   }
#   alert(fibs[fibs.length - 1] + " is the fibonacci number at position " + num);
# };


#Ruby
# def nth_fibonacci(n)

#     a = [0]
  
#     (n+1).times do |i|
#       if i==0
#         a[i] = 0
#       elsif i==1
#         a[i] = 1
#       else
#         a[i] = a[i-1] + a[i-2]
#       end  
#     end
  
#     return a[n]
#   end
  
#   puts nth_fibonacci(9)



#13. hasDupes
# Write a method that checks whether or not an array has any duplicates. Here is the javascript:

# const hasDupes = (arr) => {
#   let obj = {};
#   for (i = 0; i < arr.length; i++) {
#     if(obj[arr[i]]) {
#       return true;
#     }
#     else {
#       obj[arr[i]] = true;
#     }
#   }
#   return false;
# };


#Ruby
# def has_dupes(arr)
#     if arr.uniq.length == arr.length
#         return false
#       else
#         return true
#       end 
# end


