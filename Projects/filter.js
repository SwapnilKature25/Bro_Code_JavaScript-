
// filter()
// reduce()
// function Expression
// arrow functions



//  .filter()  =  Creates a new array by filtering out elements.

let number=[1,2,3,4,5,6,7];
let even=number.filter(isEven);
console.log(even);

let odd=number.filter(isOdd);
console.log(odd);

function isEven(element){
    return element%2===0;
}

function isOdd(element){
    return element%2 !==0;
}



let words=["Mango", "Orange", "Banana", "pomegranate", "CustardApple"];
let shortW=words.filter(shortWords);
console.log(shortW);

function shortWords(element){
    return element.length <= 6;
}

let longW=words.filter(longWords);
console.log(longW);

function longWords(element){
    return element.length > 6;
}



let ages=[16,23,17,17,18,19,60];
let mature=ages.filter(isAdult);
console.log(mature);

let Children=ages.filter(isChild);
console.log(Children);

function isAdult(element){
    return element >=18;
}

function isChild(element){
    return element < 18;
}




// ----------------------------------------------------------------------------------------------------------------
//  .reduce()  =  Reduce the element of an array to a Single Value.

const price=[15,20,11,60,70,33,67];

const total=price.reduce(sum);
console.log(`$${total}`)

function sum(previous, next){
    return previous+next;
}


const grades=[60,65,70,100,85,75,90,99];

const maximum=grades.reduce(getMax);
const minimum=grades.reduce(getMin);
console.log(maximum);
console.log(minimum);

function getMax(prevs, next){
    return Math.max(prevs, next);
}

function getMin(prevs, next){
    return Math.min(prevs, next);
}





// function Declaration =   define a reusable block of code that performs a specific task.

function hello(){
    console.log("Hello");
}

setTimeout(hello,3000);         //it will invoke hello method after 3 sec



// ----------------------------------------------------------------------------------------------------------------
// function Expressions =   A way to define functions as values or variables.

// const hello= function(){
//     console.log("Hello");
// }

const numb=[1,2,3,4,5];
// const square=numb.map(sqr);
// function sqr(element){
//     return Math.pow(element,2);
// }
const square=numb.map(function(element){    //this is function expressions
    return Math.pow(element,2);
});

const cube=numb.map(function(element){    //this is function expressions
    return Math.pow(element,3);
});

const isEvenNum=numb.filter(function(element){    //this is function expressions
    return element%2===0;
});

const isOddNum=numb.filter(function(element){
    return element%2!==0;
})

const totalNum=numb.reduce(function(prev,next){
    return prev+next;
})


console.log(square);
console.log(cube);
console.log(isEvenNum);
console.log(isOddNum);
console.log(totalNum);





// ----------------------------------------------------------------------------------------------------------------
// arrow functions =   A concise way to write function expressions good
//                     for simple functions that you use only once
//      syntax    =   (Parameters) => some code 
//                     (Parameters) => {  .......   } 


const hey=() => console.log("Heyyy");
hey();


const heyth=(name,age) => { console.log(`Heyyy there ${name}`)
                        console.log(`You are ${age} years old`)
}
heyth("swap",20);


// setTimeout() using function expressions and arrow funtn

// setTimeout(function(){
//     console.log("Its Fun Expression")
// }, 3000);

// setTimeout(()=> console.log("It's Arrow Functions"), 3000);

// Arrow fuctions using .map() , .filter() and .reduce()

const numbers=[1,2,3,4,5,6,7];
const squares=numbers.map( (element) => { return Math.pow(element, 2)} );
const cub=numbers.map( (x)=> { return Math.pow(x,3) }  );
const avg=numbers.reduce( (prev, next)=> {  const aver=(prev+next)/numbers.length
                                            return  aver} );
const Evens=numbers.filter( (element)=>{return element%2===0} )
const odds=numbers.filter( (element)=>{return element%2!==0} )


console.log(squares);
console.log(cub);
console.log(avg);
console.log(Evens);
console.log(odds);

