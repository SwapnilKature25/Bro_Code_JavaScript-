
// Inheritance 
// super
// getter and setter


//  Inheritance =  Allows a new class to inherit the properties and methods from an existing class (Parent -> Child)
//                 Helps with code Reusability 

class Animal{
    alive=true;

    eat(){
        console.log(`This ${this.name} is eating `)
    }

    sleeping(){
        console.log(`This ${this.name} is sleeping `)
    }
}

class Rabbit extends Animal{
    nam = "Rabbit";
}

class Fish extends Animal{
    nam = "Fish";
}

const rabbit=new Rabbit();
const fish=new Fish();

rabbit.eat();
rabbit.sleeping();
fish.eat();



// ----------------------------------------------------------------------------------

//  super  =  keyword is used in classes to call the constructor or
//            access the properties and methods of a parennt (superclass)
//            this = this object
//            super = the parent


class Animals{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    move(speed){
        console.log(`This ${this.name} can move with speed of ${speed}kmp`);
    }

}

class Cheetah extends Animals{
    constructor(name,age, runspeed){
       super(name,age);
        this.runspeed=runspeed;
    }
    run(){
        console.log(`this ${this.name} can run`);
        super.move(this.speed);
    }
}

class Fishes extends Animals{
    constructor(name,age, swimpeed){
        super(name,age);
        this.swimpeed=swimpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimpeed);
    }

}

const ch=new Cheetah("Cheetah",1,20);
const fis=new Fishes("fish",2,60);

console.log(Cheetah.name);
console.log(ch.runspeed);

console.log(fis.name);
console.log(fis.swimpeed);

ch.run();
fis.swim();




//  getter = special method that makes a property readable.
//  setter = special method that makes a property writable.

//  validate and modify a value when reading/writing a property.


// Ex. 1
class Rectangle{

    constructor(width, height){
        this.width=width;
        this.height=height;
    }

    set width(newWidth){
        if(newWidth  >0){
            this._width=newWidth;
        }
        else{
            console.error("Width must be Positive Number");
        }
    }

    set height(newHeight){
        if(newHeight  >0){
            this._height=newHeight;
        }
        else{
            console.error("Height must be Positive Number");
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    get area(){
        return this._width * this._height;
    }
}

const rec=new Rectangle(10, 9);

console.log(rec.width);
console.log(rec.height);
console.log(rec.area);


// Ex. 2
class Person{
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;         
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0)
        {
            this._firstName=newFirstName;
        }
        else {
            console.error("First name must be non-empty string")
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0)
        {
            this._lastName=newLastName;
        }
        else {
            console.error("last name must be non-empty string")
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0)
        {
            this._age=newAge;
        }
        else {
            console.error("Age must be a non-negative number")
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._firstName+ " " +this._lastName;
    }

    get age(){
        return this._age;
    }

}

const person=new Person("swapnil", "kature", 13);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);
