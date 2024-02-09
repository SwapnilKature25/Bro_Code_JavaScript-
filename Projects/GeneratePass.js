
// Random Password Generator Project

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symbolsChars="!@#$%^&*()_+=-[]{}\|'?./><,`~";

    let allowedChars= "";
    let password="";

    allowedChars=allowedChars + includeLowercase ? lowercaseChars : "";
    allowedChars+=includeUppercase ? uppercaseChars : "";
    allowedChars+=includeNumbers ? numberChars : "";
    allowedChars+=includeSymbols ? symbolsChars : "";


    if(length <= 0){
       return "(Password length must be at Least 1 )";  
    }
   
    if(allowedChars.length ===0)
    {
        return '(Atleast 1 set of Character must be Selected)';
    }

    for(let i=0; i<length ; i++)
    {
        const randomIndex=Math.floor(Math.random()* allowedChars.length);
        password+=allowedChars[randomIndex];
    }

    return password;
}
const passwordLength=8;
const includeLowercase=true;
const includeUppercase=true;
const includeNumbers=true;
const includeSymbols=true;

let password=generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`Generated Password : ${password}`)