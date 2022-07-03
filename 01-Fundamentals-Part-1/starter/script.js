/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

// 1、Variable name conventions
/*
let firstNane = "Jonas";
let person = "jonas";

let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob)
*/

// 2、data type
// Number、String、Boolean
// Undefined、Null、Symbol、BigInt
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);
console.log(typeof null);
*/

// 3、let const var

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';
console.log(job);

lastName = 'Schmedtmann';
console.log(lastName);
*/

// 4、operators
/*
const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;
console.log(ageJones, ageSarah);

console.log(ageJones * 2, ageSarah / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schemedtmann';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison
console.log(ageJones > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge)
*/

// 5、precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

// 6、String、template literals
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string ...`);

console.log('String with \n\
multiple\n\
lines');

console.log(`String
multiple
lines`);
*/

// 7、if
/*
const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
  console.log('Sarah can start driving license');
} else {
  const yearsLeft = 18 - age;
  console.log(`Srah is too young. Wait another ${yearsLeft} years`);
}




const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

// 8、type conversion & type coercion
/*
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(String(23) + 'test');

console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('23' + '10' + 3);
console.log('23' * '2');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

// 9、truthy & false
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 10;
if (money) {
  console.log("Don't spend it all ;");
} else {
  console.log('You should get a job!');
}



let height = 10;
if (height) {
  console.log('YAY! Heigh is defined');
} else {
  console.log('Heigh is UNDEFINED')
}
*/

// 10 、== & ===
/*
const age = 18;
if (age === 18) console.log('You just become an adult :D(strict)');

if (age == 18) console.log('You just become an adult :D(loose)');

const favourite = Number(prompt("What's y ou favouritr number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log('Cool! 2233 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else {
  console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log('Why not 23?');
*/

// 11、boolean logic
/*
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
*/

// 12、swith
/*
const day = 'wednesday';
switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory viedos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}
*/

// 13、statements & expressions
/*
if (23 > 10) {
  const str = '23 is bigger';
  console.log(str);
}

const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log('I like drink water')
*/