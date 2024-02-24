const people = [
    {name : 'Meena', age : 20},
    {name : 'Rina', age : 15},
    {name : 'Suchorita', age : 22}
]


let sum = 0;

for(let i = 0; i < people.length; i++){
     sum = people[i].age + sum;
}

// console.log(sum);

// using reduce 



const total = people.reduce((p,c) => p + c.age ,0)

console.log(total)