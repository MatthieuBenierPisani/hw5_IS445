myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumbers = myArray.filter(number => (number % 2 !== 0));
let divisibleBy2or5 = myArray.filter(number => (number % 2 == 0) || (number % 5 == 0));
let divisibleBy3Squared = myArray.filter(number => number % 3 == 0).map(number => number * number);
let sumSquared = myArray.filter(number => number % 5 == 0).map(number => number * number).reduce((a, b) => a+b);

console.log(`Array of odd numbers : ${oddNumbers}`)
console.log(`Array of numbers divisable by 2 or 5 : ${divisibleBy2or5}`)
console.log(`array of numbers divisible by 3 squared : ${divisibleBy3Squared}`)
console.log(`Array of squared numbers divisable by 5 : ${sumSquared}`)
