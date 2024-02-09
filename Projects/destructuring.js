
// destructurig
// Nested Objects
// Array of Objects


//  destructurig  =  extract values from arrays and objects, then assign
//                   them to variables in a convenient way.
//                   [] = to perform array destructuring
//                   {} = to perform object destructuring

// Example 1 = swap 2 variables []

let a=1;
let b=2;

[a, b] = [b, a]

console.log(a)
console.log(b)


// Example 2 = swap 2 elements in an array []

const colors=["red", "green", "blue", "orange", "yellow", "white"];

[colors[0], colors[5]] = [colors[5], colors[0]]

console.log(colors);


// Example 3 =  Assign  Array elements to Variabes []

const [firstColor , secondColor, thirdColor ,...extraColor] = colors;

console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
console.log(extraColor)


// Example 4 =  Extract values from Objects {}

const person1 = {
    firstName: "john",
    lastName : "Doe",
    age : 25,
    job: "Programmer",
}

const person2={firstName: "Pats", lastName: "cum", age: 35 }

// const {firstName, lastName, age, job} = person1;
const {firstName, lastName, age, job="searching"} = person2;
console.log(firstName)
console.log(lastName)
console.log(age)
console.log(job)


// Example 5 : Destructure in funtion Parameters {}

function displayPerson({ firstName, lastName, age, job}){
    console.log(`Name = ${firstName}`)
    console.log(lastName)
    console.log(age)
    console.log(job)
}

const persons1 = {
    firstName: "john",
    lastName : "Doe",
    age : 25,
    job: "Programmer",
}

const persons2={firstName: "Pats", lastName: "cum", age: 35 }

displayPerson(persons1);
displayPerson(persons2);



// Nested Objects = Objects inside of other Objects.
//                  Allows you to represent more complex data struture
//                  child object is enclosed by a parent object

//                  Person{Address{}, ContactInfo{}}
//                  ShoopingCart{Keyboard{} , mouse{} , monnitor{}}


const emp= {
    firstName: "john",
    lastName : "Doe",
    age : 25,
    job: "Programmer",
    address : {
        street : "1234 Can",
        city : "Mumbai",
        country : "xyz"
    }
}

// console.log(emp.firstName);
// console.log(emp.age);
// console.log(emp.address.city);

for(const value in emp.address){
    console.log(emp.address[value])
}


// nested obj with rest parameters
// here Address obj is child obj of employe obj

class employe{
    constructor(name , age, ...address){
        this.name=name;
        this.age=age;
        this.address=new Address(...address);

    }
}

class Address{
    
    constructor(street, city, country){
        this.street=street;
        this.city=city;
        this.country=country
    }

}

const callemp=new employe("john", 23, "123 Beach", "Mumbai", "India");
console.log(callemp.address.street);




// Array of Objects

const fruits=[{name:"orange", color: "orange", calories:80},
              {name:"banana", color: "yellow", calories:60},
              {name:"pineapple", color: "yellow", calories:50}];

// console.log(fruits[0].name);
// console.log(fruits[2].color);

fruits.push({name:"grapes", color: "green"});
console.log(fruits[3]);

// fruits.pop(fruits);
// console.log(fruits);


// ------foreach()-------

fruits.forEach(fruit =>  console.log(fruit.name));


// ------map()-------

const fruitNames=fruits.map( fruit => fruit.name)
console.log(fruitNames)


// ------filter()------

const yellowfruits=fruits.filter(fruit => fruit.color==="yellow");
const lessCalories=fruits.filter(fruit => fruit.calories < 80);
console.log(yellowfruits)
console.log(lessCalories)


// -----reduce()-------
//  (max/start , fruit/next) = the value of next element(fruit) is > than the current record holder element(max) and same for min

const maxCalFruit=fruits.reduce((max, fruit) => fruit.calories > max.calories ?
                                           fruit : max) ;

const minCalFruit=fruits.reduce((min, fruit) => fruit.calories < min.calories ?
                                           fruit : min) ;
console.log(maxCalFruit)
console.log(minCalFruit)

