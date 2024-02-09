// console.log(`Hello its Backticks symbols`);
// console.log('This is a Single Quotes');
// console.log("THis is a Double quotes");

// alert message 
// window.alert('This is an Alert Message');
// window.alert("THis is used for alert message");

// document.getElementById("myh1").textContent=`Text with JS`;          // it is used to change the content of web page from js
// document.getElementById("myP").textContent='We can use this for changing coontent from JS';



// Variable = A Container that stores a value.
            //   1. Declaratiion =  let x;
            //   2. assignment  =  x=2;

//int
let age=25;
let gpa=4.5;
// console.log(gpa);
// console.log(`Your are ${age} years old`);       // we cannot use ${age} in '' , "" quotes
// console.log(`Your gpa is ${age}`);


//strings
let course="javascript";
let degree="BCA";
// console.log(`your course is ${course}`);
// console.log(`your degree is ${degree}`);

//to find out datatype of variable
// console.log(typeof age);
// console.log(typeof course);

//booleans
let coin=true;
// console.log(typeof coin);


let fullname="Swapnil kature";
let Age=20;
let student=true;

// document.getElementById("p1").textContent=`My name is ${fullname}`;
// document.getElementById("p2").textContent=Age;
// document.getElementById("p3").textContent=student;




// Operators

let students=40;
students+=5;
students+=5;
// students**=3;   //exponent
// students++;
// students--;

console.log(students);

/*

Operator Precedence
1.Paranthesis() = ()
2.exponents     = ** or ^
3.mult & div & modulo  = *,/,%
4.add & sub     = +,-

*/

let cal=1*2+4-6+6**4;
console.log(cal);



/*

Constant Varible = A Variable that Can't be changed

---> Taking input from window.prompt 
const PI=3.145;
let radius;
let circumference;

radius=window.prompt("Enter the Radius");
radius=Number(radius);
circumference=2*pi*radius;
console.log(circumference);

*/

// Taking input from the web page 
const pi=3.145;
let radius;
let circumference;

radius=Number(radius);
circumference=2*pi*radius;

document.getElementById("mysubmit").onclick=function(){
    radius=document.getElementById("myradius").value;
    radius=Number(radius);
    circumference=2*pi*radius;
     document.getElementById("myh2").textContent=circumference+ "cm";
}

