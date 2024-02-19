//what is object - object is real word entity
// In javascript almost everything is object 
//object value are written as key:value pairs

console.log("----------My first object-----------");
let newObject = "swapnil";
console.log(newObject);



//create object using new keyword

// console.log("object using new keyword");
// const person = new Object();
// person.firstname = "Krishna";
// person.lastname = "Gabale";
// person.dob = 13071998;
// console.log( typeof person);
// console.log(person);

const mySym = Symbol("mykey1");
//create object using literal

console.log("------object using literal---------");
const personDetails = {
    firstname: "Swapnil",
    lastname: "Lule",
    [mySym]: "symKey1",
    age: 50,
    contact: 78945464,
    location: "Pune" 
  }

 console.log(personDetails);
// console.log(personDetails.firstname);
// console.log(personDetails.age);
// console.log(personDetails["location"]);
// console.log(personDetails[mySym]);

// personDetails.location = "Nanded";
// console.log(personDetails);
// //Object.freeze(personDetails);

// by using freeze method we cannot change objects variable it will be an static object.



// personDetails.greeting = function() {
//     console.log(`my name is, ${this.firstname}`);
// }
// console.log(personDetails.greeting);

//normal function
function person(personDetails){
    return `my first name is ${personDetails.firstname}`;  
}
console.log(person(personDetails));

//arrow function
const showAllPerson =(personDetails)=> {


}

//function inside function
const allPerson = function(personDetails){
    return `my current location is ${personDetails.location}`;
}
console.log(allPerson(personDetails));








