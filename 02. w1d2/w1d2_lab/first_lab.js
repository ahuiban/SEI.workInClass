
/*

console.log("Making your way in the world today takes everything you've got.");
console.log("Taking a break from all your worries, sure would help a lot.");
console.log("Wouldn't you like to get away?");
console.log("Sometimes you want to go");
console.log("Where everybody knows your name,");
//Users/andrei/Desktop/seir-flex/w1d2_lab/first_lab.js:6
console.lo("and they're always glad you came.");
console.log("and they're always glad you came.");
//SyntaxError: missing ) after argument list
console.log("You wanna be where you can see,");
console.log("our troubles are all the same");
//console.log("You wanna be where" "everybody knows");
console.log("You wanna be where everybody knows");
console.log("Your name.");


Boolean Expressions
... and arithmetic

By just looking at the following expressions, determine in your mind 
whether or not each will evaluate to true or false

1. False
2. True
3. False
4. False
5. False
6. False
7. True
8. False

1.
Write a while loop that will log in the console

'Ginger chocolate honey patties'
1000 times. You can test it out with a smaller number first, such as 10, and when that works, use 1000.

Make sure you do not run an infinite loop! If you do, close your Terminal. Oops!

let num = 1;
while (num <= 100) {
    console.log ("The number is " + num);
    num++;
};

2. Write another while loop that counts from 0 to 1000 and will log in the console the current loop number.

=> 0

=> 1

=> 2

=> 3

let num = 0;
while (num <= 100) {
    console.log ("The number is " + num);
    num++;
};


3. Write another while loop that prints a message to the console and concatenates the current loop number. Make it count from 0 to 1000.

=> "Current loop number is: 0"

=> "Current loop number is: 1"

=> "Current loop number is: 2"

=> "Current loop number is: 3"

let num = 0;
while (num <= 100) {
    console.log ("Current loop numner is: " + num);
    num++;
};

For loops
1
Write a for loop that counts from 0 to 100 and console.logs each number.

for (let i=0; i<=100; i++) {
    console.log(i);

};


for (let i=6; i<=635; i++) {
    console.log(i);
};

let x = 0;
while (x < 10) {
	console.log(x);
	x++;
}



let e = 0;
while (e < 10) {
	console.log(`Current loop number is: ${e}`);
    e++;
}
*/


let start = 0;
 let limit = 100;
 for (start; start <= 100; start++) {
 	console.log(start);
 }