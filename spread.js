// spread operator
// rest parameters



//Spread Operator  = ... Allows an Iterable such as an Array or String to be expanded into Separate elements.(unpacks the elements)

let numbers= [2,5,4,7,8,2,9];
// let res=Math.max(numbers);      //it will print NaN
let res=Math.max(...numbers);   //9
console.log(res)
let res2=Math.min(...numbers);   //2
console.log(res2)


let username="Bro Code";    
// let split=[...username];        // ['B', 'r', 'o', ' ', 'C', 'o', 'd', 'e']
let split=[...username].sort().
join("-");  // B-r-o- -C-o-d-e
console.log(split)


let fruit=["apple" , "banana", "mango"];
let vegetables = ["potatoes","tomato","carrots"];

let foods=[...fruit, ...vegetables, "onion" , "coconut"];
console.log(foods);


//-------------------------------------------------------------------

//  rest parameters = (...rest) allows a function to work with a variable 
//                     number of arguments by bundling them into an array.
             
//                      ...spread = expands an array into separate elements
//                      ...rest   = bundles seperate elements into an Array

// Ex 1
function openfridge(...foodie){
    console.log(foodie);
}

function getfood(...foodie){
    return foodie;
}

const food1="pizza";
const food2="ramen";
const food3="sushi";
const food4="hamburg";

openfridge();   // []
// openfridge(food1, food2 , food3 , food4);

let getf=getfood(food1, food2 , food3 , food4);     //using get function we can display the array of foods
console.log(getf);


// Ex 2
function sum(...numbers){
    let result=0;

    for(let numb of numbers)
    {
        result+=numb;
    }
    return result;
}

let total=sum(1,2,3,4);
console.log(`Your total is $${total}`);


// Ex 3
function average(...numbers){
    let avg=0;
    for(let number of numbers)
    {
        avg+=number;
        
    }
    return avg/numbers.length;
}

let aver=average(1,2,3,4,5)
console.log(`Your total Average is $${aver}`);



// Ex 4

function combineStrings(...string){
    return string.join(" ");
}
const fullName=combineStrings("Mr.","Swapnil","Krishna","Kature");

let fname=getFullName();
console.log(fname);