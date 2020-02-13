/*

// Question: What array methods have we used before?
// .push() => add to end of array
// .pop() => removes the last element from array
// .shift() => removes the first element
// .unshift() => adds element to first pos in array

const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry', 'Rocky Road']

// .map returns back as array
// map is used to loop over and do something to every
// element in the array

const updatedIceCreams = iceCreams.map((flavor) => {
    return flavor + ' Ice Cream'
})

console.log(updatedIceCreams)

*/




const nums = [37, 826, 209, 419, 309, 48, 738, 709, 728, 607, 9, 863, 976, 588, 611, 164, 383, 261, 14, 525, 479, 169, 755, 574, 330,
    736, 541, 838, 577, 957, 179, 436, 333, 206, 295, 744, 926, 799, 691, 259, 401, 104, 630, 645, 722, 607, 587, 714, 446, 356, 18, 16, 14, 5,
    13, 13, 17, 5, 5, 18, 12, 5, 18, 11, 2, 2, 9, 8, 4, 5, 18, 15, 18, 0, 6, 11, 18, 14, 2, 19, -14, 5, 18, 12, 3, 12, 7, 15, 5, 3, 12, 7, 6,
    10, 3, 3, 3, 18, 12, 14]

const panagrams = ['The', 'job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner', 'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
    'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
    'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
    'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept', 'driving', 'their', 'oxen', 'forward']

// FILTER
// filter the array for numbers less than 100
// filter words that have an even length

const filterLessThan100 = nums.filter(num => num < 100)
const evenLengthWords = panagrams.filter(word => (word.length % 2))
filterLessThan100
evenLengthWords

// MAP
// make a new array of each number multiplied by 100
// make a new array of all the words in all uppercase

const multiple100 = nums.map(num => num * 100)
const upperCaseWords = panagrams.map(word => word.toUpperCase())
  // multiple100
  // upperCaseWords




