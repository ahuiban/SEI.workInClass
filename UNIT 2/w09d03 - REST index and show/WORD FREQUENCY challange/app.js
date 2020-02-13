

function wordFreq(string) {
    var words = string.replace(/[.]/g, '').split(/\s/);
    var freqMap = {};
    words.forEach(function (w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });

    return freqMap;
}

console.log(wordFreq("Make it work just for sentences without commas, apostrophes, and periods. Capital letters and lowercase letters should be treated as equals: 'The' and 'the' are the same word.."));