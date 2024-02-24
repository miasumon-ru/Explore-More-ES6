class Person {
    constructor ( name, age){
        this.name = name;
        this.age = age;
    }

    sleep(){
        console.log(`sleepling now ${this.name}`)
    }
}

const kodom = new Person ('kodom ali', 32);
const xobor = new Person ('xobor ali', 36);
xobor.sleep();
console.log(xobor);
console.log(kodom);

//  this is what we call in a class function.

// bhejal

const lazy = kodom.sleep;
// console.log(lazy()); not possible in this way

