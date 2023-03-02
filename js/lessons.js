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

// some ()

const values4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const didMatchCondition = values4.some((value, index) => {
  console.log({ index, value });
  if (value >= 3) {
    return true;
  }
});

console.log("didMatchCondition:", didMatchCondition);
// Return/output:
// index: 0 value: 0
// index: 1 value: 1
// index: 2 value: 2
// index: 3 value: 3
// didMatchCondition: true

// every ()
const modules = [
  { name: "Introduction to Programming", isComplete: true },
  { name: "HTML", isComplete: true },
  { name: "CSS", isComplete: false },
  { name: "JavaScript", isComplete: true },
];

const isCourseFinished = modules.every((currentModule) => {
  return currentModule.isComplete === true;
});

console.log(isCourseFinished);
// Returns:
// false

// Object

const person = {
  firstName: "Ola",
  lastName: "Nordmann",
  module: "JavaScript",
};

Object.keys(person).forEach((key) => {
  console.log(`key: ${key}, value: ${person[key]}`);
});

// Logs:
// key: firstName, value: Ola
// key: lastName, value: Nordmann
// key: module, value: JavaScript

// map example

const person6 = {
  firstName: "Ola",
  lastName: "Nordmann",
  module: "JavaScript",
};

// .map will return a new array that contains the same number
// of elements as there were in the initial array
const keysAndValues = Object.keys(person6).map((key) => {
  return `key: ${key}, value: ${person[key]}`;
});

console.log(keysAndValues);
// Logs:
// 0: "key: firstName, value: Ola"
// 1: "key: lastName, value: Nordmann"
// 2: "key: module, value: JavaScript"

console.log(Object.values(person6));
// Returns:
// ['Ola', 'Nordmann', 'JavaScript']

Object.entries(person6).forEach((keyValuePair) => {
  console.log(keyValuePair);
});

Object.entries(person6).forEach(([key, value]) => {
  console.log("key:", key, "value:", value);
});
// Returns:
// key: firstName value: Ola
// key: lastName value: Nordmann
// key: module value: JavaScript

// chaining

// The discount percentage being applied
const DISCOUNT_PERCENTAGE = 20;

const productss = [
  { name: "Milk", price: 5.0, inStock: true },
  { name: "Cheese", price: 10.0, inStock: true },
  { name: "Bread", price: 8.0, inStock: false },
  { name: "Beans", price: 3.0, inStock: true },
  { name: "Eggs", price: 12.0, inStock: true },
  { name: "Rice", price: 4.0, inStock: false },
  { name: "Meat", price: 25, inStock: true },
  { name: "Coffee", price: 12.0, inStock: true },
  { name: "Tea", price: 8.0, inStock: false },
  { name: "Bottled Water", price: 4.0, inStock: false },
];

const discountedProducts = productss
  .filter((product) => {
    if (product.inStock === true && product.price >= 5) {
      return true;
    }
  })
  .map((product) => {
    product.discountedPrice =
      product.price - (DISCOUNT_PERCENTAGE / 100) * product.price;
    return product;
  });

console.log(discountedProducts);
// Returns:
// {name: 'Milk', price: 5, inStock: true, discountedPrice: 4}
// {name: 'Cheese', price: 10, inStock: true, discountedPrice: 8}
// {name: 'Eggs', price: 12, inStock: true, discountedPrice: 9.6}
// {name: 'Meat', price: 25, inStock: true, discountedPrice: 20}
// {name: 'Coffee', price: 12, inStock: true, discountedPrice: 9.6}

// Additional info regarding results average
// Typically to get an average, you perform the following calculation:
// student average = sum of all results / total number of results
// In this example, we perform the calculation slightly differently:
// student average = (mark / total number of marks) + (mark / total number of marks) + ...
// We divide each result by the total number of results and then add this to a total, giving us the same end result. We do this so we don’t have to wait until all results have been totalled before calculating the average. We can instead calculate the average when each element loops, saving us a step at the end.

const students = [
  { name: "Victoria", age: 19, isOnline: true, results: [80, 61, 66, 50, 91] },
  { name: "Theo", age: 32, isOnline: false, results: [57, 99, 96, 72, 96] },
  { name: "Markus", age: 54, isOnline: true, results: [50, 92, 70, 66, 90] },
  { name: "Aksel", age: 21, isOnline: true, results: [77, 86, 70, 71, 75] },
  { name: "Felix", age: 29, isOnline: false, results: [99, 76, 59, 74, 68] },
  { name: "Benjamin", age: 48, isOnline: true, results: [65, 85, 74, 83, 54] },
  { name: "Ulrik", age: 39, isOnline: true, results: [92, 72, 55, 69, 58] },
  { name: "Alma", age: 28, isOnline: false, results: [92, 91, 66, 77, 71] },
  { name: "July", age: 37, isOnline: true, results: [78, 70, 59, 76, 95] },
  { name: "Leo", age: 42, isOnline: true, results: [55, 64, 88, 88, 95] },
];

const result = students
  // Get only the students >= 30 and that are online
  .filter((student) => {
    if (student.age >= 30 && student.isOnline === true) {
      return true;
    }
  })
  // Reduce all of the student's averages to a class average
  .reduce((classAverage, student, index, studentsArray) => {
    // Reduce all of the student's results to a single average
    const studentsTotalMarks = student.results.reduce(
      (studentAverage, result, index, resultsArray) => {
        studentAverage += result / resultsArray.length;
        return studentAverage;
      },
      0
    );
    // Add the average of the student to the class average
    classAverage += studentsTotalMarks / studentsArray.length;
    return classAverage;
  }, 0);

console.log(result);
// Returns:
// 73.72
