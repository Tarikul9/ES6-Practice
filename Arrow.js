// function doubleIt(num){    //function declaration
//     return num * 2;
// }

// const doubleIt = function myFun(num){  //variable declearetion./function expretion
//     return num * 2;
// }

//ES6 mathod(di9ngle line)
// const doubleIt = num => num * 2;
//const result = doubleIt(5);
//console.log(result);

//type 3(akadhik)
const add = (x, y) => x + y;
 

const result = add(50, 70);
console.log(result);

//type2/faka function
const give5 = () => 5;
const result2 = give5();
console.log(result2);

//math function
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
console.log(result);