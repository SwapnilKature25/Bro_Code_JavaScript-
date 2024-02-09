
// if Statements
// .checked 
// Ternary Operator 
// Switch Case



// if Statements = if a Condition is true , execute some code, if not then do something else.

let age=20;
let haslicense=false;

if(age >= 18)
{
    console.log("You are old enough for driving");

    if(haslicense)
    {
        console.log("You have your License");
    }
    else{
        console.log("You dont have your License yet");
    }
}
else{
    console.log("You are not 18+ for driving");
}



/* if-else 
console.log(" -------- if-else -------");

let yourage=21;

if(yourage >=18)
{
    console.log("you are old enough to enter this site");
} else if(yourage < 0){
    console.log("you are too small to enter this site");
} else if(yourage > 100){
    console.log("you are too old  to enter this site");
} else {
    console.log("you are less than 18 to enter this site");
}

*/


// taking input from user

const mytext=document.getElementById("mytext");
const mysubmit=document.getElementById("mysubmit");
const result=document.getElementById("result");

let theage;

mysubmit.onclick= function(){

    theage=mytext.value;
    theage=Number(theage);
 
    if(theage >=18)
    {
                    result.textContent = `you are old enough to enter this site`;
    } else if(theage < 0){

            result.textContent =`you are too small to enter this site`;
    } else if(theage > 100){

            result.textContent =`you are too old  to enter this site`;
    } else {

            result.textContent = `you are less than 18 to enter this site`;
}

}




// .checked  = Property that determines the checked state of an html checkbox or radio element buttn.

const Subscribed=document.getElementById("Subscribed");
const Visa=document.getElementById("Visa");
const Mastercard=document.getElementById("Mastercard");
const PayPal=document.getElementById("Paypal");
const submit=document.getElementById("submit");
const resultcheck=document.getElementById("resultcheck");
const paymentresult=document.getElementById("paymentresult");

submit.onclick=function(){

    if(Subscribed.checked)
    {
        resultcheck.textContent=`you are Subscribed`;
    }
    else{
        resultcheck.textContent=`You are NOT Subscribed`;
    }

    if(Visa.checked)
    {
        paymentresult.textContent=`You are Paying with VISA`;
    }else if(Mastercard.checked)
    {
        paymentresult.textContent=`You are Paying with Mastercard`;
    }else if(PayPal.checked)
    {
        paymentresult.textContent=`You are Paying with PayPal`;
    }  else{
        paymentresult.textContent=`You must select Payment type`;

    }

}



    /* Ternary Operator = A shortcut to if{} and else{} statements helps to assign a variable based on a condition
                          condition ? codeIfTrue : codeIfFalse
    */
   console.log("Ternary Operator");

    let Yage=21;
    let message=(Yage > 18) ? "Your can Enroll on this Site" : "You are not eligible";
    console.log(message);

    let purchasamount=100;
    let discount= purchasamount >=100 ? 10 : 0 ;
    console.log(`You total is $${purchasamount - (purchasamount*discount/100)}`);



    // Switch Case : Can be an Effecient to  many if-else statements
    
    let testscore=50;
    let testgrade;

    switch(true)
    {
        case testscore>=90:
            testgrade= "A";
            break;
        
        case testscore>=80:
            testgrade= "B";
            break;
        
        case testscore>=60:
            testgrade= "c";
             break;

        case testscore>=50:
            testgrade= "D";
            break;

            case testscore>=45:
                testgrade= "E";
                break;

        default:
            console.log("You Have to do More Hardwork");
    }

    console.log(testgrade);


    