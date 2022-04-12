const stringsLength = (arr) => {
  i = 0;
  let lengthArr = [];
  while (i < arr.length) {
    lengthArr.push(arr[i].length);
    i++;
  }
  return lengthArr;
};

const stringsArr = ["boo", "doooo", "hoo", "ro"];
console.log(stringsLength(stringsArr));

// for this task I prefer the for loop soultion from exercise 6.3, it's easier to tundertand, and I don't need to define the varaibles (i and lengthArr) outside the loop.
