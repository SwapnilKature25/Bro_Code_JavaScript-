
var a;          //hoisting

//  << word and Keyword  >>

// hello =  word
// for = keyword

//  << variable and constants >>
// var , const , let
// where var=let
const dulha="lab";
var dulhan="laby";

//  << Hoisting  >> =  Variables and Functions are hoisted which means there declaration is moved on the top of code.
//             It can be used before creating an variable.
console.log(a);
a=12;

//  << Types in Js >> =>  primitive and reference
// primitive = number,string,null, undefined , Boolean
// reference = [] , () , {} 

// Aisi koi bhi value jisko copy karne par real copy nahi hota, balki us main value ka reference pass hojata hai, use hum reference value kahte hai, 
//  Aur jiska copy karne par real copy ho jaye wo value ko primitive type value kahte hai.

var abc=14;         //primitive
var cb=[1,2,3,4];   //reference
var ref=cb;
ref.pop();

// << Conditionals >>
// if-else , else-if

if(23<45){

}
else{

}

if(12>11){

}
else if (condition) {
    
}
else if (condition) {
    
}
else{

}


// loops =  for, while 

// Functons = function is a block of code which is used to perform a specific task.

// functions are of 3 types
// 1.when we dont want to run our program in future instead of current.
// 2.when we want to reuse our code.
// 3.when we want to run our code wth different data.

function hellobolo()
{
    console.log("hello");
}
hellobolo();
hellobolo();

function abcd(a)
{
    console.log(a);
}
abcd(12);
abcd(23);


// argumets = giving real value while calling functions.
// parameters = where the real value stores called as parmeters

// << Arrays >>

var arr=[1,2,3,4];
// console.log(arr[1]);


// push pop shift unshift functions


var arr2=[11,22,34,45,5,6];
// arr2.pop();                  //remove end element
// console.log(arr2);

// arr2.push(12);                  //add element at end
// console.log(arr2);

// arr2.unshift(10);                 ////add element at start
// console.log(arr2);

// arr2.shift();                    //remove first element
// console.log(arr2);

// arr2.splice(1,3);                //used to remove middle elements from 1 point to another
console.log(arr2);


// objects = 

