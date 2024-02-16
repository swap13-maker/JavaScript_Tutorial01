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