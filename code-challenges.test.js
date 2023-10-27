// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]
const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("figFunct", () => {
  it("takes in a number (greater than 2)", () => {
    expect(figFunct(6)).toEqual([1, 1, 2, 3, 5, 8]);
  })
})
describe("figFunct", () => {
  it("takes in a number (greater than 2)", () => {
    expect(figFunct(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  })
})

//----------> figFunct is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// f(0)= 0 applies only to the first integer
// f(1)= 1 applies only to the second integer
// f(n)= f(n-1) + f(n-2)
//Create a function figFunct 
  

const figFunct = (n) => {
  //This wasn't part of the prompt but it establishes returns for (n <= 0) and (n===1)
  // if (n <= 0) {
  //   return [];
  // } else if (n === 1) {
  //   return [0];
  // }

  let n1 = 1;
  let n2 = 1;
  const result = [n1, n2];

  for (let i = 2; i < n; i++) {
    const nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
    result.push(nextNum);
  }
  return result;
}
// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe("sortVals", () => {
  it("takes in an object and returns an array of the object's values sorted from least to greatest", () => {
    expect(sortVals(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
  });
})
describe("sortVals", () => {
  it("takes in an object and returns an array of the object's values sorted from least to greatest", () => {
    expect(sortVals(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  });
})

// b) Create the function that makes the test pass.

// Pseudo code:

//create a function sortVals 
//Create a variable "values" to store 
//Use Object.values() to get values of the obj.
//Use .sort to arrange values least to greatest.
//Comparison function (a, b) => a - b
//return values

const sortVals = (obj) => {
  const values = Object.values(obj).sort((a, b) => a - b);
  return values;
}