//functions 
//addition of two numbers
function addTwoNumber(num1, num2){

    let sum = num1 + num2;
    return sum;
}

let sum = addTwoNumber(18,20);
console.log(sum);

//login user function
function loginUserMessage(username){

    let loginInfo = `${username} is logged in`;
    return loginInfo;

}

let loginInfoDetails = loginUserMessage("Swapnil Lule");
console.log(loginInfoDetails);

//calculate cart  price

function calculateCartPrice(...num1){ //...means here we used rest operator 
    return num1;

}

console.log(calculateCartPrice(200,400,500));

//function calling using object

const userDetails ={
    username: "swapnil",
    gender: 25,
    email: "swapnillule13@gmail.com"
}

function callUserDetails(us){
    return `my name is ${us.username} my gender is ${us.gender} my email ${us.email}`;
}

console.log(callUserDetails({
    username: "NIkhil",
    gender: 29,
    email: "nikhil78@gmail.com"
}));

//funnction calling an array
const myNewArray = [200,500,400,600];

function returnSecondValue(getarray){
    return getarray[2];

}

console.log(returnSecondValue( [500,600,700,800,900]));


//new array
console.log("new Array");
const myNewArray1 = [200,500,400,600];

function returnSecondValue(getarray){
    console.log(getarray[2]); 

}

returnSecondValue(myNewArray1);
