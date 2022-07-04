'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D')

// const interface = 'Audio';
// const private = 534;
// const if = 23;
*/

// 1、function
/*
function logger() {
  console.log('My name is Jonas');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)

const num = Number('23');



// 函数声明
function calcAge1(birheYeah) {
  return 2037 - birheYeah;
}

const age1 = calcAge1(1991);
console.log(age1);

// 函数表达式
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

// 箭头函数
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1991, 'Jonas'));
console.log(yearUntilRetirement(1980, 'Bob'));


// 函数调用
function cutFruitPieces(fruit) {
  return fruit * 4;
}


function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


// 重写函数

const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;
  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
  // return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1991, 'Jonas'));
console.log(yearUntilRetirement(1970, 'Mike'));
*/

// 2、array

const friend = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);



