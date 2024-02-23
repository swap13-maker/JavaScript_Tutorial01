//sub of two numbers

function subOfTwoNumbers(num1,num2){ // ()it is called parameters

    let sub = num1-num2;
    return sub;
}

let sub = subOfTwoNumbers(15,10);// it is called arguments
console.log(sub);

//function using object

const studentDetails = {
    firstname: "Swapnil ",
    lastname: "Lule",
    rollno: 20114,
    email: "swapnillule13@gmail.com"
}

function showStudentDetails(getStudent){
    return `student name is ${getStudent.firstname}${getStudent.lastname} his rollNo is ${getStudent.rollno} and emailId ${getStudent.email}`;
    // console.log(`student name is ${getStudent.firstname}${getStudent.lastname} his rollNo is ${getStudent.rollno} and emailId ${getStudent.email}`);

}
// console.log(showStudentDetails(studentDetails));
let getStudent1 = showStudentDetails(studentDetails);
console.log(getStudent1);

//mulitplication of two numbers

function multiplyOfThreeNumbers(num1, num2, num3){
    let multi = num1 * num2 * num3;
    return multi;
}

const total = multiplyOfThreeNumbers(25,30,65)
console.log("total:" ,total);

console.log(typeof subOfTwoNumbers);

// sum of two no
 function sumOfTwoNumber(num1, num2){
    let sum = num1 + num2;
    return sum;

 }
  
//  let addition = sumOfTwoNumber(10, 20);
 console.log(sumOfTwoNumber(10, 20));


 //--------array check--------
 const sutdentInfo = {
    username: "swapnil",
 }

 
 const sutdentInfo2 = {
    username: "swapnil",
 }

 console.log(sutdentInfo === sutdentInfo2)

//----map filter example----
const newArray = [12,45,65,65]

const multiplyNo = newArray.filter((value)=> value%5 ==0)
console.log(multiplyNo)

const subofno = newArray.map((item) => item *10)
console.log(subofno); 