// SECTION Primatives
// String
// Boolean
// Numbers
// Null
// Undefined

//SECTION Refrence
// Objects
// Arrays
// function
// NaN

// var
// let
// const

//SECTION  Hoisting
// console.log(me);
// var me = "Mark";

// console.log(you);
// const you = "Your Name";

//SECTION Objects
let companies = {
  honda: {
    companyName: "Honda",
    address: "123 Fake St",
    hours: "1-2pm",
    phone: "1800WeAreHonda"
  },
  ford: {
    companyName: "Ford",
    address: "1233 Fake St",
    hours: "1-3pm",
    phone: "1800WeAreFord"
  }
};

//Object Literal (Plain old Javascript object (POJO))
let me = {
  name: "Mark",
  age: 31,
  alive: true,
  pets: ["Minnie", "Shadow"],
  cars: {
    primaryCar: {
      make: companies.honda,
      tires: {
        fr: {
          make: {
            name: "firestone"
          }
        }
      },
      model: "Batmobile",
      automatic: true,
      year: 2016
    }
  }
};

//String Concatenation
console.log("Hello " + me.name);

//String Interpolation
console.log(`Hello ${me.name.toUpperCase()}`);

let n = "name";
// You can only access properties on an object with a variable using Bracket Notation
console.log(me[n]);
console.log(me.n);

//increase the value of a variable
me.age + 4; //does not change the original value
me.age += 4;
me.age = me.age + 4;

console.log(
  `Hello my name is ${me.name}, I have ${me.pets.length} pets, I drive a ${me.cars.primaryCar.make} ${me.cars.primaryCar.model}`
);

// for (const x in me) {
//   console.log(x, ":", me[x]);
// }

//SECTION Arrays
//users
let users = ["mark", "jake", "d$", "peyton", "tim", "bud"];

console.log(users[users.length - 1]);

let lastUser = users[users.length - 1];
console.log(lastUser[lastUser.length - 1]);

//pop, push, shift, unshift

users.push("Brittany", "Zach"); //Adds to end of Array
users.pop(); //Removes last element from Array

users.unshift("Zach"); // adds to beginning of array
users.shift(); //Removes first element from array

// splice alters original array
// first value start index, second is number to remove, third is what to add
users.splice(3, 0, "Zach", "Joe");
//Makes a copy of a section of the array
let offset = 10;
let someUsers = users.slice(3, 7);

console.log("LOOPS SECTION");

//SECTION Loops
let cats = [
  { name: "garfield" },
  { name: "felix" },
  { name: "tom" },
  { name: "Mr. Snibbley" }
];

for (let i = 0; i < cats.length; i++) {
  let cat = cats[i];
  console.log(cat.name);
  if (cat.name == "tom") {
    break;
  }
}
console.log("5bil");
let num = 0;
while (num < 5000000000) {
  num++;
}
console.timeEnd("5bil");

do {} while (false);

//object itteration
for (const prop in me) {
}

//array itteration
cats.forEach(cat => {
  console.log(cat.name);
});

// let spongeString = "Hello from Bikini Bottom";
// let strArr = spongeString.toLowerCase().split("");
// for (let i = 1; i < strArr.length; i += 2) {
//   strArr[i] = strArr[i].toUpperCase();
//   if (strArr[i] == " ") {
//     i--;
//   }
// }
// console.log(strArr.join(""));
