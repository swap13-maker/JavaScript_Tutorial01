
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

(function chai(){
    //named iife
    console.log(`DB Connected`);
}
)();

((name) =>{
    //simple iife
    console.log(`DB Connected Two ${name}`);
})("Swapnil")


//arrow function
const additionOfTwoNO = (num1 , num2) =>{
    return num1 + num2;
    
}

let sum = additionOfTwoNO(6,3);
console.log(sum);
