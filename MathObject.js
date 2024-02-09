
//  Math  =  Built-in objects that provides a collection of properties and methods.

// we can access different properties by using Math object like as folows. 
// console.log(Math.PI);
// console.log(Math.E);


let x=3.99;
let p=4;
let y=10;
let a=-3.23;
let z;

/* Math Methods */
// z=Math.round(x);  
// z=Math.floor(x);    //floor always make round digit to down
// z=Math.ceil(x);        //ceil always make round digit to up
// z=Math.pow(y,p)
// z=Math.trunc(x);    //trunc eliminate the decimal
// z=Math.sqrt(p);    
// z=Math.log(y);    
// z=Math.sin(45);
// z=Math.cos(45);
// z=Math.tan(45);
// z=Math.abs(a);          // absolute makes the -val to +val
z=Math.sign(a);         // it will make -1 if val is - , 1 if val + and 0 if val is 0
console.log(z);

// let max=Math.max(x,y,p,a);
// let min=Math.min(x,y,p,a);
// console.log(min);






/* Random Nummber Generator */


// let random=Math.random();
// let random=Math.random() * 6;
let random= Math.floor(Math.random() * 10);
console.log(random);

// const max=100;
// const min=50;
// let randomnum=Math.floor(Math.random() * (max-min) )+min;
// console.log(randomnum);


//roll 3 dice
const mybtn=document.getElementById("mybtn");
const label1=document.getElementById("label1");
const label2=document.getElementById("label2");
const label3=document.getElementById("label3");
const min=1;
const max=6;
let randomnumb1;
let randomnumb2;
let randomnumb3;

mybtn.onclick=function(){
   randomnumb1=Math.floor(Math.random() * max)+min;     
   randomnumb2=Math.floor(Math.random() * max)+min;
   randomnumb3=Math.floor(Math.random() * max)+min;
   label1.textContent=randomnumb1;
   label2.textContent=randomnumb2;
   label3.textContent=randomnumb3;
}