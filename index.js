// Object Destructuring 1
// What does the following code return/print?
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846


//Object Destructuring 2
//What does the following code return/print?
let planetFacts = {
    numPlanets2: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};

let { numPlanets2, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // new obj with the same properties as planetFacts - numPlanets2

//Object Destructuring 3
//What does the following code return/print?
function getUserData({ firstName, favoriteColor = "green" }) {
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }) //Your name is Alejandro and you like purple
getUserData({ firstName: "Melissa" }) //`Your name is Melissa and you like green
getUserData({}) // `Your name is undefined and you like green

//Array Destructuring 1
//What does the following code return/print?
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); //Maya
console.log(second); //Marisa
console.log(third); //Chi

//Array Destructuring 2
//What does the following code return/print?
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]

console.log(raindrops); //Raindrops on roses
console.log(whiskers); //whiskers on kittens
console.log(aFewOfMyFavoriteThings); //an arrray of the rest of the items in the array
//["Bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"]

//Array Destructuring 3
//What does the following code return/print?
let numbers = [10, 20, 30];
console.log(numbers);
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]
//left side is destructuring from an aray of the rigth side.
//and thus updating the numbers array. 
console.log(numbers) //[10, 30, 20]

//ES2015 Refactoring
//In this exercise, you’ll refactor some ES5 code into ES2015.

//ES5 Assigning Variables to Object Properties
let obj = {
    numbers: {
        a: 1,
        b: 2
    }
};
let { a } = obj.numbers;
let { b } = obj.numbers;

//ES2015 Object Destructuring
/* Write an ES2015 Version */
//ES5 Array Swap
let arr = [1, 2];
//let temp = arr[0];
//arr[0] = arr[1];
//arr[1] = temp;
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log(arr);

//ES2015 One-Line Array Swap with Destructuring
/* Write an ES2015 Version */

// raceResults()
// Write a function called raceResults which accepts a single array argument.
// It should return an object with the keys first, second, third, and rest.

// first: the first element in the array
// second: the second element in the array
// third: the third element in the array
// rest: all other elements in the array
// Write a one line function to make this work using
// An arrow function
// Destructuring
// ‘Enhanced’ object assignment (same key/value shortcut)

const raceResults = ([first, second, third, ...rest]) => { return { first, second, third, rest } };

console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']))