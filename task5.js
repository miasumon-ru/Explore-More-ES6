const instructor = 
    [
        {name : 'Nodi', age: 28, position : 'senior'},
        {name : 'Akil', age: 26, position : 'junior'},
        {name : 'shobuj', age: 30, position : 'senior'}
    ]


const names = instructor.filter(s => s.position === 'senior');

console.log(names)