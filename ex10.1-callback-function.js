//1
const isString = (str, func) => {
  if (typeof str === "string") {
    func(str);
  } else {
    console.log("not a string");
  }
};

function logString(str) {
  console.log(str);
}

isString("Hello World!", logString);

//2
const firstWordUpperCase = (str, func) => {
  let arr = str.split(" ");
  let word = arr[0].toUpperCase();
  return func(word);
};

function dashes(str) {
  let newStr = str.split("").join("-");
  return newStr;
}

console.log(firstWordUpperCase("this is a sentence", dashes));

//3
//a function that gets a string and return number of charecters
function numOfChars(str) {
  return `${str} has ${str.length} charecters`;
}

console.log(firstWordUpperCase("JavaScript is COOL", numOfChars));

//4
const myFunc = (x, y, func) => {
  if (x > y) {
    return func(x, y);
  } else {
    return func(y, x);
  }
};

function addMore(a, b) {
  return `You should add ${a - b} to ${b} to get ${a}`;
}

console.log(myFunc(16, 3, addMore));
