/* // assignments 1
let country = "Ukraine";
let continent = "Europe"
let language = "ukrainian"
let population = 10;
console.log(population > 6);
console.log(population < 33);
const description1 =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  ' million people speak ' +
  language;

console.log(description1)

const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description2)

country = "France";

if (population > 33) {
  console.log(country + ' population is ' +
  (population - 33) + ' million above average');
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

*/

let x, y;
x = y = 25 - 10 -5; // x = y = 10
console.log(x, y);

let now = 2050;
let ageJonas = now - 1994; 
let ageSara = now - 1991;

let averageAge = ageJonas + ageSara / 2;

console.log(averageAge); // not the right way because division happens first. 

let averageAgeCorrect = (ageJonas + ageSara) / 2;

console.log(
  `In ${now} the average age of Jonas and Sara will be ${averageAgeCorrect} years.`
);

/*
CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

let massMark = 78;
let heightMark = 1.69;
let BMIMark;

let massJohn = 95;
let heightJohn = 1.88;
let BMIJohn;

BMIMark = parseFloat(massMark / (heightMark * heightMark)).toFixed(2);
BMIJohn = parseFloat(massJohn / (heightJohn * heightJohn)).toFixed(2);

console.log(`BMI of Mark is ${BMIMark}`);
console.log(`BMI of John is ${BMIJohn}`);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

console.log(`This is a string \n\
  with multiple \n\
  lines \n\
  <3`);


