const data = [ {id : 1, name : 'abul', address: 'kochu khet'}];

// console.log(data[0].address);



const products = {

    count : 5000,
    data : [
        {id: 1, name : 'lenovo', price : 65000},
        {id: 2, name : 'mac book', price : 165000}
]
}

// console.log(products.data[1].price);


const user = {
    id : 50001,
    name : 'shoriful raj',
    address : {
        city : "Dhaka",
        street : {
            first : '54/1 uttor side',
            second : 'poribag',
            third : "no dorai"
        }
    }
}

// console.log(user.address.street.second);


const user2 = {
    id : 50002,
    name : 'Pori bibir bazar',
    address : {
        city : "Chitagong",
        country : "Bangladesh"
      
    }
}
// it is called optional chaining . data thakle agabe na thakle agabe na. question mark is required in case of optional chaining
console.log(user2.address.street?.second);
console.log(user.address.street.second);

