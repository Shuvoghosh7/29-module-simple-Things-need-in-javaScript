const numbers = [ 10,20,3,4,5,7,8,9,45]
const numbersSlice = numbers.slice(4,8);
// console.log(numbersSlice);
// const numbersSplice = numbers.splice(4,2);
// console.log(numbersSplice);
const numbersSplice2 = numbers.splice(4,2,33,44,66,77,);
console.log(numbersSplice2);
console.log(numbers);
