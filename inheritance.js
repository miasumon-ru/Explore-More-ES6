
class Vehicle {

    constructor(name, price){
        this.name  = name;
        this.price = price;
    }

    move (){
        console.log('gari chole na chole na re gari chole na');
    }

}


class Bus extends Vehicle{
    constructor(name, price, seat,ticketPrice){
        super(name, price);

        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

const sonali = new Bus("Sonali", 500000, 40, 550);

console.log(sonali);


class Truck extends Vehicle {
    constructor(name,price, load){
        super(name, price);
        this.load = load;
    }
}


/** class
 * 1 > template for making object
 * 2 > also called blueprint of object
 * 3 > class has property and method
 * 4 >  first letter of class is capital 
 * 5 > class is called with "new" keyword
 * 6 > constructor >>> a special keyword which is used in a class
 */

