/*
// 
const wordReverse = (str) => {
    // ['h','e','l']
    let reverseString = str.split(" ").reverse().join(" ");
    return reverseString;
}

// console.log(wordReverse('hello'))

const toUpperCase = (str) => {
    return str.toUpperCase();
}


const repMaster = (input, func) => {
    return func(input.toLowerCase()) + ' proves that I am the rep MASTER!'
}

// console.log(repMaster("Never give your heart to a blockhead", wordReverse));

console.log(repMaster("I finished this practice", toUpperCase));

// console.log(toUpperCase('hello'))







// setInterval/Timeout
// let num = 0
// let sI = setInterval( () => {
//   num += 1
//   if(num === 2) {
//     clearInterval(sI)
//   }
//   console.log(`this is num: ${num}`)
// }, 1000)


const electricMixer = (attachment) => {
    console.log(`This mixer is now: ${attachment()}`)
}

const spiralizer = () => {
    return "spiralizing"
}

const slicerDicer = () => {
    return "slicin' and dicin'";
}

// electricMixer(slicerDicer)

// functions...should be reusable
// invoke, calling, excuting
// standard input => standard output
const funcOne = (param) => {
    // console.log(`this is param: ${param}`)
    param()
}

const funcTwo = () => {
    console.log('hi')
}

// funcOne(funcTwo)

*/


let students = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' }
]


const whatGrade = (student, grade) => student.grade === grade;



const filterGrade = (studentArr, grade, callback) => {
    let newStudentArr = []
    for (let i = 0; i < studentArr.length; i += 1) {
        if (callback(studentArr[i], grade)) {
            newStudentArr.push(studentArr[i])
        }
    }
    return newStudentArr
}

filterGrade(students, 9, whatGrade);