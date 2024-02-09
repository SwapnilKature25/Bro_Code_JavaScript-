
// Number Guessing Game

const minNum=50;
const maxNum=100;
const answer=Math.floor(Math.random() * (maxNum - minNum +1)+ minNum);
// console.log(answer);

let attempts=0;
let guess;
let result;
let running= true;

while(running){

    guess=window.prompt(`Guess your Number from ${minNum} - ${maxNum}`);
    guess=Number(guess);
        
    if(isNaN(guess))
    {
        window.alert("Please Enter a Valid Number");
    }else if(guess < minNum || guess > maxNum)
    {
        window.alert("Please Enter a Valid Number");
    } else{

        attempts++;
        if(guess < answer)
        {
            window.alert(`TOO LOW! Try Again`);
        }else if(guess > answer){
            window.alert(`TOO High! Try For Less One`);
        }
        else{
            window.alert(`CORRECT! The Answer was ${answer}. It took you ${attempts} attempts`);
            running=false;
        }
    }

}


// while(running){
    
//     guess=document.getElementById("num");
//     let sub=document.getElementById("sub");
//     result=document.getElementById("result");
    
//     sub.onclick= function(){
        
//     if(isNaN(guess)){
//         result.textContent=`Please Enter Valid Number`;
//     }else if(guess < minNum || guess > maxNum)
//     {
//         result.textContent=`Please Enter Valid Number`;
//     }
//     else{

//         attempts++;

//         if(guess < answer)
//         {
//             result.textContent =`TOO low`;
//         }else if(guess > answer){
//             result.textContent =`TOO High`;

//         }else {
//             result.textContent = `TOO Correct `;
//             running=false;
//         }
//     }
// }

// } 