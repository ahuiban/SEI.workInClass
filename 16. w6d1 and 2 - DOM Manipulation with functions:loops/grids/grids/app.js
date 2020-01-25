// #1

// Run a function that generates 64 squares that alternate colors:



// You can perform these steps in order:

// Generate 64 divs
// Give each div a class that will provide size and color
// Give each alternating div a different class somehow
// Constrain the number of squares on each row by putting them all in a container of fixed width.





console.log("running");


const generateRedSquare = () => {
    let $redSquare = $('<div>').addClass(`redSquare`);
    $redSquare.css("background-color", "red");
    $(".container").append($redSquare);
}

const generateBlackSquare = () => {
    let $blackSquare = $('<div>').addClass(`blackSquare`);
    $blackSquare.css("background-color", "black");
    $(".container").append($blackSquare);
}
const generateSquares = (numberOfSquares) => {
    for (let i = 1; i <= numberOfSquares; i++) {
        if (i % 2 !== 0) {
            generateRedSquare();
        }
        else {
            generateBlackSquare();
        }

    }
};
generateSquares(64);






////////////////////////////////////////////////////////////////


// challenge: make a perfect checker board

// generate a red square
const generateRedSquare2 = () => {
    let $redSquare = $('<div>').addClass(`redSquare`);
    $redSquare.css("background-color", "red");
    $(".container2").append($redSquare);
}
// generate a black square
const generateBlackSquare2 = () => {
    let $blackSquare = $('<div>').addClass(`blackSquare`);
    $blackSquare.css("background-color", "black");
    $(".container2").append($blackSquare);
}
// generate a row by alternating between the two square functions which are passed in
const generateRow = (firstColor, secondColor) => {
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            firstColor();
        }
        else {
            secondColor();
        }
    }
}
// generate checker board by alternating between the two row patterns
const generateCheckerBoard = () => {
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            generateRow(generateRedSquare2, generateBlackSquare2);
        }
        else {
            generateRow(generateBlackSquare2, generateRedSquare2);
        }
    }
};
generateCheckerBoard();