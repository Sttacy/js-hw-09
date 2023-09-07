const arr = [23, 3, 26, 7, 50, 20, 12];

const newArr = arr
  .filter((number) => {
    return number % 2 === 0 && number > 10;
  })
  .sort((a, b) => b - a);

console.log(newArr);
