let arr = [3, 5, -9, 7, 2, 8, 10, -6];

const newArr = arr
  .filter((number) => {
    return number % 5 === 0 && number > 0;
  })
  .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(newArr);
