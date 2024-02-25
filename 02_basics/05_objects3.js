//-----------****----------
const productInfo = {
    id: 1120,
    name: "pencil",
    price: 120,

    showProduct: function(){
        console.log(`product name is ${this.name} and price is ${this.price}`);
    }
}

productInfo.showProduct();
productInfo.name = "pen";
productInfo.showProduct();


//----------*******--------
let personDetails ={
    name: "swapnil",
    age: 25,
    address: "Pune"
}

function showPersonDetails(person){
    return `person name is ${person.name} age is ${person.age} address is ${person.address}`;
}

console.log(showPersonDetails(personDetails));

console.log(showPersonDetails({
    name:"Nikhil",
    age: 27,
   address: "Nanded"
}));

//---------*********--------
let personDetails1 = {
    name: "swapnil",
    age: 25,
    address: "Pune",
    
    newFunction: function(){
        return `person name is ${this.name} his age is ${this.age} and address is ${this.address} `
    },

    newArray: myarray = [1,2,3,4,5,6,7]
    
}

console.log(personDetails1.newFunction());
personDetails1.name = "Nikhil"
personDetails1.age = 27
console.log(personDetails1.newFunction());

console.log(myarray);



//call function and array in object

//define function
function myName(name){
    return `my name is ${name}`
}

//define array

let numbers = [1,2,3,4,5,6]

let myObject = {
    personName: myName,
    showNumbers: numbers
}

console.log(myObject.personName("Swapnil"));
console.log(myObject.showNumbers);


