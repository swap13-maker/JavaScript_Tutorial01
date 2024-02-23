
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

let personDetails ={
    name: "swapnil",
    age: 25,
    address: "Pune"
}

function showPersonDetails(person){
    return `person name is ${person.name} age is ${person.age} address is ${person.address}`;
}

console.log(showPersonDetails({
    name:"Nikhil",
    age: 27,
    address: "Nanded"
}));



