const arr = [3, -2, 5, 6, -8, 2];

let newArr;

if (arr.some((number) => number < 0)) {
  newArr = arr.map((number) => (number > 0 ? number : Math.abs(number)));
} else {
  newArr = "No negative numbers found";
}

console.log(newArr);
