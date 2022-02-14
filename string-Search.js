const products = [
    'mi mobile in 266gb',
    'leptop in 266gb',
    'sony Mobile in 255gb'
]

const searching = 'mobile';
const output = [];
/* for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        output.push(product);
    }
}
console.log(output); */
// search in using includes();
/* for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase()))
    output.push(product);
}
console.log(); */
// search in sta
const ser = 'mi'
for(const product of products){
    if(product.toLowerCase().startsWith(ser.toLowerCase())){
        output.push(product);
    }
}
console.log(output);
