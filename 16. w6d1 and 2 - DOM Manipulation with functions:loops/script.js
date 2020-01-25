console.log("Working?")
console.log($)

//Write a function that will add an h2 with the text "Just getting started" to the body of the page.
const addH2 = () => {
    let $h2 = $('<h2>').text("Just getting started");
    $('body').append($h2);
}

// now change  the H2 with this function

const changeH2 = () => {
    $('h2').text("Getting warmed up");
}

// calling the first function using addH2();

$(() => {
    addH2(); //
    changeH2(); // calling the second function
});



//>>>>>>>>>>><<<<<<<<<<<<<<//

//Let's build a digital quilt! It's not going to be too easy on the eyes. In fact, it's going to be a horrible quilt.
// Eventually, we would like to invoke a function generateQuilt() that will build the quilt on the page. We would like to specify how many squares the quilt has: generateQuilt(1000) would build a quilt with 1000 randomly-colored squares.

// First goal: add 1000 divs to the DOM

// Write a for loop that counts from 1 to 1000

for (let i = 1; i <= 1000; i++) {
    console.log(i);
}

//Make a square with jQuery - add a class that gives it shape

$(() => {
    const $square = $('<div>').addClass('square');
    $('body').append($square);
});

//Combine the two and generate many squares, appended to the body each time the loop runs
$(() => {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
        const $square = $('<div>').addClass('square');
        $('body').append($square);
    }
});

// This is a DRY way to make a grid of 1000 divs.

// Add to the DOM using a function that runs a loop
// I would like a convenient way to generate more squares.

// We can wrap this process in a function:

const generateSquares = () => {
    for (let i = 1; i <= 1000; i++) {
        console.log(i);
        const $square = $('<div>').addClass('square');
        $('body').append($square);
    }
}
// if you called the function multiple times, will generate more squares....
$(() => {
    generateSquares();
});