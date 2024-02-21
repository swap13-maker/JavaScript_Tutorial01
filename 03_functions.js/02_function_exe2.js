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