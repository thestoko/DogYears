const myAge = 35;
let earlyYears = 2; 
earlyYears *= 10.5;
//my age variable - 2 
let laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears; 
let myName = "Stoyan".toLowerCase();
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);