// if Statement - it checks wether condition is true or not,
// if the first condition is true first block is executed either second block is executed

/*
Use if -  to specify a block of code to be executed, if a specified condition is true
Use else - to specify a block of code to be executed, if the same condition is false
Use else if - to specify a new condition to test, if the first condition is false
Use switch - to specify many alternative blocks of code to be executed

*/

const balance = 2000;

if (balance <750) {
    console.log("balance is 750");
}else if (balance >1500) {
    console.log("balance is 1500");
}else{
    console.log("balance is 2000");
}

const val1 = 100;
const val2 = 200;
const val3 = 300;

if(val1 >= val2 && val1 >= val3){
    console.log(`The largest number among three is: ${val1}`);

}else if (val2 >= val1 && val2 >=val3) {
    console.log(`The largest number among three is: ${val2}`);
    
} else {
    console.log(`The largest number among three is: ${val3}`);
}