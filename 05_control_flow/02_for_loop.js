// for loop - it is used to iterate part of program several time
// if the number of iteration is fixed we used for loop

for (let i = 0; i <= 10; i++) { //initialize the variable , check the condition, increment/decrement value
    const element = i;
    console.log(i*i);
}

//loop inside loop

for (let i = 1; i <=10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 1; j <=10; j++) {
        console.log(i + `*` +j+ `=` + i*j);
        
    }
    
}

//for loop using array

let myArray = ["Ironman", "Spiderman", "Thor", "Hulk", "Wanda", "Captain Marval"]
console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}

//break and continue
//break - if we use break statement so the execution will be stop at that specific loop
//continue - it continue the part of execution but skip that execution 

for (let index = 1; index <=20; index++) {
    if (index == 5) {
        console.log(`5 is detected`);
        break
    }
    console.log(`the value of i is ${index}`);
    
}