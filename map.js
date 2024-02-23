const numbers = [2,5,4,7,8,9,6];

const doubled = [];

for ( const number of numbers){

    const double = number * 2;

    doubled.push(double);
    
}

console.log(doubled);

//  same thing by using map

function doubleIt (number){
    return number * 2;
}

const double2 = (x) => x *2;

// const result = numbers.map(double2);
const result = numbers.map(x => x *2);
// const result = numbers.map(n => {
//     return n * 2;
// })


console.log(result)