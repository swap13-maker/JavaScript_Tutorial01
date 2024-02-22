
const user ={
    username: "swapnil",
    age: 25,

    welcomemessage: function showuser(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomemessage();
user.username = "Nikhil";
user.welcomemessage();

// iife is immediately invoked function expression is a design pattern in javascript. 
//where you define and execute function at the same time
//it is used to create private scope for variable to avoid polluting the global namespace

(function chai(){
    //named iife
    console.log(`DB Connected`);
}
)();

((name) =>{
    //simple iife
    console.log(`DB Connected Two ${name}`);
})("Swapnil") 


//arrow function example
const additionOfTwoNO = (num1 , num2) =>{
    return num1 + num2;
    
}

let sum = additionOfTwoNO(6,3);
console.log(sum);


//another example of function

let value1 = 15;
let value2 = 30;

function addTwoNumbers(value1, value2){
    let sum = value1 + value2;
    return sum;
}

// console.log(addTwoNumbers(value1, value2));
let result = addTwoNumbers(value1, value2);
console.log("total sum", result);
