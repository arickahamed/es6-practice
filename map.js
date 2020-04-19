const three = [1, 2, 3];
const double = three.map(function(element){
    return  element * element;
})
console.log(double);

const four = [1, 2, 3, 4];
const division = four.filter(function(element){
    return element % 2 == 0;
})
console.log(division);