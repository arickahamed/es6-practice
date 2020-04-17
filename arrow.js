// function doubleIt(num){
//     return num * 2
// }

// const doubleIt = function myFun(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;

const result = doubleIt(250);
console.log(result);

const add = (m, n) => m + n;
const result2 = add(30, 40);
console.log(result2);

const give2 = () => 2;
const result3 = give2();
console.log(result3);

const doMath = (x, y) =>{
    const add = x + y;
    const diff = x - y;
    const all = add + diff;
    return all;
}
const result4 = doMath(8, 5);
console.log(result4);