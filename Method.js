// Method Chaining = Calling one Method after Another in one Continuous line of Code


// -------No Method Chaining-------

// let users=window.prompt("Enter you Username");
// console.log(users);

// users=users.trim();
// let firstChar=users.charAt(0);
// firstChar=firstChar.toUpperCase();

// let letters=users.slice(1);
// letters=letters.toLowerCase();

// finaluser=firstChar + letters;

// console.log(finaluser);


// -----------Method Chaining ----> Calling Multiple methods in one Continuous line of code

// let username=window.prompt("Enter the Username ") ;
// username=username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);




//Logical Operators =  Used to Combine and Manipulating boolean Values
//                   &&, || , !

let temp=31;

if(temp > 0 && temp <=30)
{
    console.log("Its NOrmal outside");
}
else if(temp > 30 || !temp==30){
    
    console.log("Its hot outside");
}


let isSunny=true;

if(!isSunny)            //it will make false to true using ! operator
{
    console.log("Its Sunny outside");
}
else {
    console.log("Its cloudy outside");

}



//  =   assignment operator
//  ==  comparison operator (compare if values are equal or not)
//  === Strict equality operator (check both values and datattype)
//  !=  inequality operator
//  !== Strict inequality operator

let Pi=3.14;
if(Pi === "3.14")
{
    console.log("the pi is same");
}
else{
    console.log("the pi is not same ===");
}


if(Pi !== 3.14){
    console.log("the pi is not same !=");
}

else{
    console.log("the pi is  same ===");
}