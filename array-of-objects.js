const products = [
    {id : 1, name : "lenovo", price : 65000},
    {id : 2, name : "dell", price : 45000},
    {id : 3, name : "hp", price : 40000},
    {id : 4, name : "mac", price : 165000}
]

//  map

const names = products.map(product => product.name);
console.log(names);

// forEach

products.forEach(product => console.log(product.id));

// filter

const expensive = products.filter(product => product.price>50000);
console.log(expensive);
    
    // find

    const affordable = products.find(product => product.price <50000);
    console.log(affordable)

     // reduce 
     
     
     const total = products.reduce ((p,c)=> p+c.price,0);

    // const sum = (p=0, c) => {
    //     return p + c.price;

    // }
    // const total = products.reduce (sum);


     console.log(total)