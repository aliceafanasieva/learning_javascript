// assignments
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

if (population > 33) {
  console.log(country + ' population is ' +
  (population - 33) + ' million above average');
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}