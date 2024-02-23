

const products = [
    {id : 1, name : "lenovo", price : 65000},
    {id : 2, name : "dell", price : 45000},
    {id : 3, name : "hp", price : 40000},
    {id : 4, name : "mac", price : 165000}
]


class Product {

    constructor(name){

        this.name = name;

    }



    country = "Bangladesh";

    speak (talk){
        console.log(`talking about ${talk}`)
    };


}

const lenovo = new Product ('lala lele lala');

console.log(lenovo);
lenovo.speak('sumon');


class Teacher {
    // method
    lecture (){
        console.log('teaching math');
    }
    // special constructor method is used to create a object which holds the same property of an objects.it is called the blueprint of an object

    constructor(name, subject){
        this.name = name;
        this.subject = subject;

    }
}

const sadhin = new Teacher('shadhin sarker', 'physics');
const rashid = new Teacher('rashid mia', 'English');
sadhin.lecture()
console.log(sadhin);
console.log(rashid);