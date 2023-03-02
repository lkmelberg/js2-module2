//  map lesson
const names = [
  { firstName: "Ola", lastName: "Nordmann" },
  { firstName: "John", lastName: "Doe" },
  { firstName: "Mario", lastName: "Rossi" },
  { firstName: "Jan", lastName: "Jansen" },
];

// Returns:
// [ "Ola Nordmann", "John Doe", "Mario Rossi", "Jan Jansen" ]
const combinedNames = names.map((person) => {
  return `${person.firstName} ${person.lastName}`;
});

console.log(combinedNames);

const rectangles = [
  { length: 30, width: 20 },
  { length: 10, width: 10 },
  { length: 40, width: 40 },
];

// Returns:
// [ 600, 100, 1600 ]
const areas = rectangles.map((rectangle) => rectangle.length * rectangle.width);

console.log(areas);

// filter

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter((number) => {
//   if (number >= 3) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(filteredNumbers);
// Returns:
// [3, 4, 5]

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter((number) => number >= 3);
// console.log(filteredNumbers);
// Returns:
// [3, 4, 5]

const numbers = [0, 25, 50, 75, 100, 125, 150, 175, 200];
const filteredNumbers = numbers.filter((number) => {
  if (number >= 100) {
    // If the number is equal to or above 100 then we return true
    // This will keep this element in the new array
    return true;
  } else {
    // If we return false then the item will not be included in the new array
    return false;
  }
});
console.log(filteredNumbers);
// Returns:
// [100, 125, 150, 175, 200]

// We can refactor the above code to be more concise:

// const numbers = [0, 25, 50, 75, 100, 125, 150, 175, 200];
// const filteredNumbers = numbers.filter((number) => number >= 100);
// console.log(filteredNumbers);
// // Returns:
// [100, 125, 150, 175, 200]

const people = [
  { name: "Kari", age: 28 },
  { name: "Astrid", age: 32 },
  { name: "Hans", age: 22 },
  { name: "Inger", age: 19 },
  { name: "Liv", age: 42 },
  { name: "Kristoffer", age: 12 },
  { name: "Anne", age: 12 },
  { name: "Martin", age: 17 },
  { name: "Joakim", age: 45 },
  { name: "Ellen", age: 7 },
];

const adults = people.filter((person) => {
  if (person.age >= 18) {
    return true;
  }
});

// or

// const adults = people.filter((person) => person.age >= 18);

console.log(adults);
// Returns:
// [
//   {name: 'Kari', age: 28},
//   {name: 'Astrid', age: 32},
//   {name: 'Hans', age: 22},
//   {name: 'Inger', age: 19},
//   {name: 'Liv', age: 42},
//   {name: 'Joakim', age: 45}
// ]

const games = [
  { title: "Mayhem Fighter", isMultiplayer: true, rating: 8 },
  { title: "Build-a-farm", isMultiplayer: true, rating: 9 },
  { title: "Ghost Story", isMultiplayer: false, rating: 8 },
  { title: "Fast Car Racer", isMultiplayer: true, rating: 7 },
  { title: "Elf and Dwarf RPG", isMultiplayer: false, rating: 8 },
];

const filteredGames = games.filter((game) => {
  if (game.isMultiplayer === true && game.rating >= 8) {
    return true;
  }
});

// or

// const filteredGames = games.filter(
//   (game) => game.isMultiplayer && game.rating >= 8
// );

console.log(filteredGames);
// Returns:
// [
//   {
//     name: 'Mayhem Fighter',
//     isMultiplayer: true,
//     rating: 8,
//   },
//   {
//     name: 'Build-a-farm',
//     isMultiplayer: true,
//     rating: 9,
//   },
// ];

// reduce

// Numbers that we will loop through
const values = [2, 3, 5, 10, 20];

const sum = values.reduce((total, value) => {
  // Add our current element from the array to our 'total' accumulator
  total += value;
  // We have to return our 'total' accumulator
  return total;

  // You can see we are setting an initial value of 0 after the callback function
}, 0);

console.log(sum);
// Returns:
// 40

const valuese = [100, 200, 300, 400, 500];

const endResult = valuese.reduce(
  (previousValue, currentElement, index, array) => {
    return previousValue;
  }
);

console.log(endResult);
// returns 100

// Adding these values together should give us a result of 40
const values2 = [
  { nestedValue: 10 },
  { nestedValue: 10 },
  { nestedValue: 10 },
  { nestedValue: 10 },
];

const sumOfValues = values2.reduce((total, currentObject) => {
  // Add the 'nestedValue' property from the current object in the array
  total += currentObject.nestedValue;
  return total;
}, 0);

// if not initial value of 0, We do not get our expected answer of 40
console.log(sumOfValues);
// returns:
// [object Object]101010

// Sum of these values is 25 (5 + 5 + 5 + 10)
const values3 = [5, 5, 5, 10];

const sumOfValues3 = values3.reduce((total, value) => {
  // Add the current value to our total
  total += value;
  // Return the total
  return total;
});

// or
// const sumOfValues = values.reduce((total, value) => (total += value));

console.log(sumOfValues3);
// Returns:
// 25

const products = [
  { title: "Cheese", price: 15.0 },
  { title: "Milk", price: 8.99 },
  { title: "Bread", price: 22.0 },
  { title: "Egg", price: 5 },
];

const totalCost = products.reduce(
  (total, currentProduct) => (total += currentProduct.price),
  0
);

// or
// const totalCost = products.reduce((total, currentProduct) => {
//   total += currentProduct.price;
//   return total;
//   // Setting the initial 'total' to 0
// }, 0);

console.log(totalCost);
// Returns:
// 50.99

// All of the in-stock products added together equals 170.95
const products2 = [
  { title: "Cheese", inStock: false, quantity: 2, price: 15.0 },
  { title: "Milk", inStock: true, quantity: 5, price: 8.99 },
  { title: "Bread", inStock: true, quantity: 3, price: 22.0 },
  { title: "Egg", inStock: true, quantity: 12, price: 5 },
];

const totalCost2 = products2.reduce((total, currentProduct) => {
  if (currentProduct.inStock === true) {
    total += currentProduct.price * currentProduct.quantity;
  }
  return total;
}, 0);

// or
// const totalCost = products.reduce(
//   (total, currentProduct) =>
//     inStock ? (total += currentProduct.price * currentProduct.quantity) : total,
//   0
// );

console.log(totalCost2);
// Returns:
// 170.95

// find

const users = [
  { name: "Kari", id: 19313 },
  { name: "Hans", id: 40202 },
  { name: "Joakim", id: 59230 },
  { name: "Inger", id: 14023 },
  { name: "Ellen", id: 76339 },
];

const foundUser = users.find((user) => {
  // Find a name with 'n' as the second letter
  if (user.name[1].toLowerCase() === "n") {
    return true;
  }
});

// const foundUser = users.find(({ name }) => name[1].toLowerCase() === "n");

console.log(foundUser);
// Returns:
// { name: "Inger", id: 14023 }

const books = [
  { title: "Building a Spaceship", inStock: false },
  { title: "Growing Orchids", inStock: false },
  { title: "River Fisher", inStock: true },
];

// Destructured the props and moved logic to the return
const foundBook = books.find(({ inStock }) => inStock);

if (!foundBook) {
  console.log("No books in stock!");
} else {
  console.log("First book in stock:", foundBook);
}
// Returns:
// No books in stock!
