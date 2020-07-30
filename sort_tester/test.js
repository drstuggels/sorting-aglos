function randomArray(length, min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let arr = [];
  for (let i = 0; i < length; i++) {
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    arr.push(rand);
  }
  return arr;
}

function check(arr) {
  sorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      sorted = false;
      break;
    }
  }
  return sorted;
}

const arrayLength = 100000;
let randomArr = randomArray(arrayLength, -1000000, 1000000);

//console.table(randomArr);

console.time(arrayLength + " items sorted in");
let sortedArr = sort(randomArr);
console.timeEnd(arrayLength + " items sorted in");

//console.table(sortedArr);

let sortedCorrectly = check(sortedArr);
console.log("Sorted Correctly: " + sortedCorrectly);
