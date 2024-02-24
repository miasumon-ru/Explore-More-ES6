

let numbers = [1,3,5,7];

let evenArray = [];

for (let i = 0; i < numbers.length; i++){
    let even = numbers[i] + 1;

    evenArray.push(even);
}

// console.log(evenArray);

// using map

const even = numbers.map(e => e + 1);
// console.log(even)

const numbers2 = [33,50,79,78,90,101,30];

const divisibleByTenArray = numbers2.filter(d => d  % 10 === 0);
console.log(divisibleByTenArray)






