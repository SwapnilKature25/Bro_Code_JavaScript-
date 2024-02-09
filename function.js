// function
// Variable Scope


// function  = A section of Reusuable code.
//             Declared code once,use it whenever you want. Call the function and Execute this code
//             Writes Onces , Run Anywhere


function Greet(usernam, time) {
    console.log(`Good Morning `);
    console.log(`Good Afternoon ${usernam}`);
    console.log(`Good Night it's ${time} am now`);
}

Greet("Swapnil",12);    //calling funtn


function add(x,y){
    let res=x + y;
    return res;
}
 
console.log(add(2,2));


function isvalidEmail(email){
    if(email.includes("@")){
            return true;
    }
    else {
        return false;
    }
}

console.log( isvalidEmail("swap@gmail.com"));



//-------------------------------------------------------------------
// Variable Scope = Where a variable is recognized or accessible( local vs global)

let x=3;
let y=2;
function function1(){
    // let x=1;        local 
    console.log(x);
}

function function2(){
    // let x=2;
    console.log(y);
}

function1();
function2();