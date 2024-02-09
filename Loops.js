
// while loop = repeat some code while some condition is true

/*
let user=""; 

while(user === "" || user=== null)
{
    console.log("the user is same");
    user=window.prompt("enter your username");
}

console.log(`the user is ${user}`);
*/


let loggedIn=true; //if there  is false then only it will go for while otherwise it simply skip it
let username;
let password;

// while(!loggedIn){

//     username=window.prompt(`Enter your Username`);
//     password=window.prompt(`Enter your password`);

//     if(username == "Swapnil" && password == 1234)
//     {
//         loggedIn=true;
//         console.log("You Logged In");
//     }
//     else{

//         console.log("Invalid Id try again ");
//     }
// }

// As we keep loggedin true in declaration it will not consider it then go for loop unlike while loop

// do{

    // username=window.prompt(`Enter your Username`);
    // password=window.prompt(`Enter your password`);
//     if(username == "Swapnil" && password == 1234)
//     {
//         loggedIn=true;
//         console.log("You Logged In");
//     }
//     else{

//         console.log("Invalid Id try again ");
//     }
// }while(!loggedIn)



// for loop = Repeat some code a limited amount of times

for(let i=0 ; i<=10; i+=2)
{
    // console.log(i);
}

//Break and Continue

for(let i=0 ; i<=15 ; i+=2){
    if(i == 8){
        // continue;
        break;
    }
        console.log(i)
}