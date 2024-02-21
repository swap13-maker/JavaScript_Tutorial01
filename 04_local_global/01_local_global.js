//local scope
// variables which is declared inside function of block is called local scope
// they are only accessible within that specific function or block.

function exampleFunction(){

    //local scope variable
    let localvar = "im local variable";
    console.log(localvar); 
}

exampleFunction();


//global scope
//variable which is decleared outside of any function or block is called global scope
//they can be accessed from any part of script, include inside functions.

//global scope variable
const globalvariable = "im global variable";

function globalfunction(){
    console.log(globalvariable);
}
globalfunction();

console.log(globalvariable);