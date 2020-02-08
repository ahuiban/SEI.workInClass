let sumOfEvens = 0;
for (let i = 0; i <= 10; i++) {
  // console.log(i);
  if (i % 2 === 0) {
    sumOfEvens += i;
    // console.log("Running total: " + sumOfEvens);
  }
}
console.log(sumOfEvens);