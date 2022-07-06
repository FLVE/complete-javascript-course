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
/*
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
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob','Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages)

// 3、array method
const friends = ['Michael', 'Steven', 'Peter'];
// 添加元素
const newsLength = friends.push('Jay');
console.log(friends);
console.log(newsLength);
friends.unshift('John');
console.log(friends);

// 移除元素
friends.pop();//Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();//First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

*/


// 4、object
/*
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 3027 - 1991,
  job: 'teacher',
  friedns: ['Micheal', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

// console.log(jonas)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName,lastName,age,job,and friends');
console.log(jonas[interestedIn]);


if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request!');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtmann';
console.log(jonas);


console.log(`${jonas.firstName} has ${jonas.friedns.length} friends, and his best friends is called ${jonas.friedns[0]}`);


const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friedns: ['Micheal', 'Peter', 'Steven'],
  hasFriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }
  // calcAge: function () {
  //   // console.log(this)
  //   return 2037 - this.birthYeah;
  // }
  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    console.log(this.age)
    return this.age;
  }
};

const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

// console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge'](1991));
console.log(jonas.calcAge());
console.log(jonas);
console.log(jonas.age);
console.log(jonas.age);
*/