/* const number = [5,7,1,4,3,9,6,2];
const sortNumber = number.sort();
// console.log(sortNumber);
const frend = ['rifat','sanim','abir','babor','cat'];
const sortFrend = frend.sort();
console.log( sortFrend); */
//revers array
/* const frend = ['rifat','sanim','abir','babor','cat'];
// const sortReversFrend = frend.reverse();
const sortReversFrend = frend.sort().reverse();
console.log( sortReversFrend); */

const number = [33,11,32,3,2,45,66,1];
const sortNumber = number.sort(function(a,b){
    return a-b;
});
console.log(sortNumber);