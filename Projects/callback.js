
// callback
// foreach
// map()


// callback  =  A Function that is passed as an Argument to Another Function.

//              Use to Handle Asynchronous Operations.
//              1. Reading a File
//              2. Network Request
//              3. Interacting with Databases

hello(Namaste);

function hello(callback){
    console.log("Good Morning!");
    callback();         //it will call the callback method 
}

// hello(Namaste());   

function Namaste(){
    console.log("Namaste!");
}


sum(displayPage , 1,3);
function sum(callback,x,y)
{
    let res=x + y;
    callback(res);
}

// function displayConsole(res){
//     console.log(res);
// }

function displayPage(res){
    document.getElementById("mypage").textContent = res;
}



//-------------------------------------------------------------------

// forEach()  = method used to iterate over the elements of an array
//              and apply a Specified function (callback) to each element.

//              array.forEach(callback);
//             we get element, index, array which Provided by foreach

let Numbers=[1,2,3,4,5];

// Numbers.forEach(double);
// Numbers.forEach(square);
Numbers.forEach(cube);
Numbers.forEach(display);

function double(element , index, array)
{
    array[index]=element * 2;
}

function square(element , index, array){
    array[index]=Math.pow(element,2);
    // console.log(array[index]);
}

function cube(element , index , array){
    array[index]=Math.pow(element, 3);
}

function display(element){
    console.log(element);
}


//Ex 2

let fruits=["Mango", "Orange", "Coconut"];

fruits.forEach(uppercase);
fruits.forEach(lowercase);
fruits.forEach(display);

function uppercase(element ,index , array){
    array[index]= element.toUpperCase();
}

function lowercase(element , index, array){
    array[index]=element.toLowerCase();
}

fruits.forEach(Capitaliz);
fruits.forEach(display);

function Capitaliz(element , index, array){
    array[index]=element.charAt(0).toUpperCase() + element;
}
function display(element){
    console.log(element);
}



//-------------------------------------------------------------------
// map() = Accepts a Callback and applies that function 
//         to each element of an Array,then return a new Array.

let number=[1,2,3,4,5,6];

// let sq=number.map(squareNum);
let sq=number.map(cub);
console.log(sq);

function squareNum(element){
    return Math.pow(element,2);
}

function cub(element){
    return Math.pow(element,3);
}



const updateDate=["2003-1-10","2014-22-1","2023-19-2"];     

updateDate.map(formatDates);

function formatDates(element){
    const newDates=element.split("-");
    console.log(`${newDates[1]}/${newDates[2]}/${newDates[0]}`);        //1/10/2003  22/1/2014  19/2/2023
}