/*
/////////////////////////////////
//// Print the longest word ////
///////////////////////////////

const printLongestWord = (words) => {
    let longestWord;
    let length = 0;
    for (let word of words) {
        if (word.length > length) {
            length = word.length;
            longestWord = word;
        }
    }
    return longestWord;
};
console.log(printLongestWord( [
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "blob"] ) );



////////////////////
//// Fibonacci ////
//////////////////

   const generateFibSequence = maxNumber => {
  let fibNumbers = [1, 2];
  let nextNumberInSequence = 0;
  while (nextNumberInSequence < maxNumber) {
    let lastNumber = fibNumbers[fibNumbers.length - 1];
    let secondToLastNumber = fibNumbers[fibNumbers.length - 2];
    nextNumberInSequence = lastNumber + secondToLastNumber;
    if (nextNumberInSequence < maxNumber) {
      fibNumbers.push(nextNumberInSequence);
    }
  }
  return fibNumbers;
};
console.log(generateFibSequence(1000));

*/


