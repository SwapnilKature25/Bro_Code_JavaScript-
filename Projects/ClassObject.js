
/* Object
   this
   Constructors
   class
   static
*/


//  Object =  A Collection of Related Properties and/or methods
//            can represent real world objects (people , products, places)
//            Object = { key: value,
//                       function() }


const person1 = {
    firstName : "Swapnil",
    lastName : "Kature",
    age : 20,
    isEmployed : true,
    sayHello : function(){ console.log("Heyy I am Swapnil")},   //function expression
    eat : () => console.log("I am done Eating"),
}
person1.sayHello();
person1.eat();
console.log(person1.lastName);
console.log(person1.isEmployed);



// ------------------------------------------------------------------------------------------------

// this =  Reference to the object where THIS is used
//         (the Object depends on the immediate context)
//         person.name = this.name 


const person2 = {
    name : "Bro",
    favCoder : "AllCoders",
    sayHel : ()=> {console.log(`hey this is ${person2.favCoder}`)},
    sayExp : function(){ console.log(`hey this is ${this.name}`) },
    saybye : function() { console.log(` bye bye ${this.favCoder}`) }
}

person2.sayHel();
person2.sayExp();
person2.saybye();



// -----------------------------------------------------------------

// Constructors =  Special method for defining the properties and Methods of Object

function Car(a,b,c,d){
    this.a=a,
    this.b=b;
    this.c=c;
    this.d=d,
    this.drive = function(){console.log(`You drive the ${this.a}`)}
}
const car1=new Car("Rolls Royce", "Mustang", 2024 , "Black");
const car2=new Car("Audii ", "BMW", 2024 , "Black");
const car3=new Car("BMW", "Mustang", 2024 , "White");
console.log(car1.a);
console.log(car1.b);
console.log(car1.c);
console.log(car1.d);

car3.drive();



// ---------------------------------------------------------------------------------------

//  Class =  (ES6 feature) provides a more Structured and Cleaner way to 
//           work with objects compared to traditiona constructor funtion .
//           ex.  Satatic keyword , encapsulation , inheritance


class Product{
    constructor(name, price){
        this.name=name;
        this.price=price;
    }

    displayProduct(){
        console.log(`Product : ${this.name}`);
        console.log(`Price : $${this.price}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const product1=new Product("Iphone", 2000);
const product2=new Product("SAMSUNG", 2000);

product1.displayProduct();
product2.displayProduct();

const total=product1.calculateTotal(0.05);
console.log(`Total price (with tax) is $${total}`);



// ----------------------------------------------------------------------------------------

//  static =  Keyword that defines properties or methods that belong to a class itself 
//            rathar than the objects created from that class 
//            (class owns everything static, not the objects)

//  we don't need to create an object of the class to access static properties.
//  ANything which is declared static belongs to class itself.

class MathUtil{
    static PI=3.14;

    static getDiameter(radius){
        return radius*2;
    }

    static getCircumference(radius){
        return 2* this.PI * radius;
    }

}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10).toFixed(2));


class User{
    static userCount=0;

    constructor(username){
        this.username=username;
        User.userCount++;
    }

    getUser(){
        console.log(` Hello! My username is ${this.username}`);
    }

    static getuserCount(){
        console.log(`There are ${User.userCount} users Online`);
    }

}
const user1=new User("Patrick");
// console.log(user1.username);
// console.log(User.userCount);
user1.getUser();

const user2=new User("Justin");
// console.log(user2.username);
// console.log(User.userCount);
user2.getUser();

User.getuserCount();  