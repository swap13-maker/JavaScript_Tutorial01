// use of map

const myArray = [1,2,3,4,5,6,7,8,9,10];

const number = myArray.map((num) => num * 10)
.map((num) => num + 10)
.filter((num) => num >= 40)

console.log(number);

//print square of array element
const square = myArray.map((val) => {
    return val * val;
})
console.log(square);

//change to upper case
const Vegetables = ["apple", "banana", "grapes", "pinapple"]

const changeUpperCase = Vegetables.map((fruits) => {
    return fruits.toUpperCase();

})
console.log(changeUpperCase);