
// Array = A Variable like Structure that can Hold Mutiple Values.

let fruits= ["apple" , "banana", "mango"];
console.log(fruits);

fruits.push("Endorange");
fruits.pop();
fruits.unshift("Startorange");
fruits.shift();
console.log(fruits);
// console.log(fruits.length);
console.log(fruits.indexOf("mango"));

console.log("\n For Loop");  

for(let i=0 ; i<fruits.length - 1; i++)
{
    console.log(fruits[i]);    
}

console.log("\n ");  

for(let fruit of fruits){
    console.log(fruit);    
}
console.log("\n Foreach Loop");  

//foreach
fruits.forEach(fruit => {
    console.log(fruit)
});


fruits.sort().reverse().push("cocunut");
console.log(fruits);    



//------------------------------------------------------------------

