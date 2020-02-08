/*
  LECTURE: Callbacks

  A callback is a function that is passed into another function
*/

// CONSOLE LOG TWO DIFFERNT MESSAGES a set number of TIMES EACH

// PHASE 1
// 2 for loops that console.log a diff message
// for(let i = 0; i < 2; i += 1){
//   console.log(`looping over i: ${i}`)
// }

// for(let i = 0; i < 2; i += 1){
//   console.log(`i is now: ${i}`)
// }

// PHASE 2
// create repeat function
// const repeat = (times) => {
//   for(let i = 0; i < times; i += 1){
//     console.log(`i is now: ${i}`)
//   }
// }
// repeat(2)

// PHASE 3
// adding callback to repeat that is passed anonymous function
// ES6 fat arrow () => {}
// const repeat = (times, callback) => {
//     for(let i = 0; i < times; i += 1){
//       callback(i)
//     }
//   }

// passing a function do the repeat function
// repeat(2, (i) => {
//   console.log(`i is now: ${i}`)
// })

// repeat(3, (i) => {
//   console.log(`looping over i: ${i}`)
// })

// PHASE 4
// adding callback to repeat that is passed named function

const repeat = (times, callback) => {
    for (let i = 0; i < times; i += 1) {
        callback(i)
    }
}


repeat(2, consoleLogOne)

repeat(3, consoleLogTwo)


function consoleLogOne(i) {
    console.log(`i is now: ${i}`)
}

function consoleLogTwo(i) {
    console.log(`looping over i: ${i}`)
}

