// String Methods
// String Slicing 

// String Methods = Allow you to Manipuate and work with Text :

let username="Bro Code";
console.log(username.charAt(1));
console.log(username.indexOf('r'));
console.log(username.lastIndexOf('e'));

console.log(username.length);
console.log(username.toUpperCase());
console.log(username.slice(1,4));       // start  , end

console.log(username.trim());   //remove unwanted spaces 
console.log(username.repeat(2));   //it will simply repeat the String

// let res=username.startsWith("B");
// console.log( res);

if(username.startsWith(" ")){
    console.log("Your uusername can't starts with spaces ");
}
else{
    console.log(username)
}

let show=username.endsWith("e");

if(show){
    console.log("Your uusername can't end with spaces ");
}
else{
    console.log(username)
}

//incudes
let inc=username.includes(" ");
console.log(inc)

//replaceAll
let phoneNum=" 12 34-5 67-890";
phoneNum=phoneNum.replaceAll("-","");
// phoneNum=phoneNum.replaceAll(" ","");
console.log(phoneNum)

phoneNum=phoneNum.padStart(18,"0");
console.log(phoneNum)

phoneNum=phoneNum.padEnd(25,"0");
console.log(phoneNum)


//----------------------------------------------------------------------------------------

// String Slicing : Create a SubString from a portion of another String 
// string.slice(start,end);

let user="Bro code";
// user=user.slice(0,4);
// user=user.slice(-1);    //e
// let newuser=user.slice(-2);    //r
user=user.slice(4,8);

console.log(user);

let fullName="Swapnil Kature"
let First=fullName.slice(0, fullName.indexOf(" "));
let last=fullName.slice(fullName.indexOf("K"),fullName.length);         //kature
let last2=fullName.slice(fullName.indexOf("K"));         //kature

console.log(First);
console.log(last);

let email="Swapnil@gmail.com";
let start=email.slice(0,email.indexOf("@"));    //@ no. of index is Exclusive so it can't be added
console.log(start);
let extension=email.slice(email.indexOf("@")+1) //it will remove @
console.log(extension);




