//using 2 for loop

const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const compareArrays = (array1, array2) => {
  const sameItems = [];
  for (let item1 of array1) {
    for (let item2 of array2) {
      if (item1 === item2) {
        sameItems.push(item1);
      }
    }
  }
  return sameItems.length ? sameItems : false;
};

console.log(compareArrays(food, food1));
