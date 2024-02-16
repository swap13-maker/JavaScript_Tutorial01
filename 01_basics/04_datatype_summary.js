const id= Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

const myFunction = function()
 {
    console.log("hello world");
    
}

const outsideTemp= null;

console.log(typeof myFunction);


/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object


*/

const rollNo = Number(1101);
console.log(typeof rollNo);
console.log(rollNo);

const stuName = String("Swapnil");
console.log(typeof stuName);
console.log(stuName);

const isLoggenIn = Boolean("Hitesh");
console.log(isLoggenIn);
console.log(typeof isLoggenIn);

console.log("-----*****-------")

const value = null;
console.log(value);
console.log(typeof value);

console.log("-----*****-------")

const value12 = undefined;
console.log(value12);
console.log(typeof value12);

console.log("-----*****-------")

const score = Symbol('365');
console.log(score);
console.log(typeof score);


console.log("-----*****-------")

const maxNumber = ["123", "789", "456", "231"];
console.table(maxNumber);
console.log(maxNumber);
console.log(typeof maxNumber);

console.log("-----*****-------")

let x = sumNumber(4,3);

function sumNumber(a,b) 
{
       console.log("hello world");
       return c = a*b;
       
       

       
}
console.log(sumNumber);
console.log(typeof sumNumber);
console.log(c);