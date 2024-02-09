//  Type Conversions 
 
 
 
 // How to accept user input in Javascript

 // 1.Easy Way = Window Prompt.
 // 2.Proffesional Way = Html textbox

 // 1st way to take input in JS

//  let Username;
//  Username=window.prompt("Whats your username");
//  console.log(Username);


// 2nd way to take input in JS
let username;
document.getElementById("mySubmit").onclick=function(){
    username=document.getElementById("myText").value;
    // console.log(username); 
    document.getElementById("myh1").textContent=`Hello ${username}`;
}





/* Type Conversions = Change the Datatype of the Value to Another
                     (String , number , boolean)

If we take user input in the form of String but we want Number then we can convert it useing converion

*/

/*
Number :

let age=window.prompt("How old are you ");
age+=1;
console.log("Before type Conversion ",age, typeof age);       // in this case the above age is became of String type cause of Concatenation so to overcoe this problem we have type conversion to not misunderstood the situation
age=Number(age);
age+=1;
console.log("After type Conversion ",age, typeof age); 

*/

// String :

let x="bro";
let y="bro";
let z="bro";

// let x="";
// let y="";
// let z="";

x=Number(x);
y=String(y);
z=Boolean(z);

console.log(x, typeof x);       
console.log(y, typeof y);
console.log(z, typeof z);
