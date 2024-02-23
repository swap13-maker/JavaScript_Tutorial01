// use of reduce

const myArray = [1,2,3,4,5,6]

const arrTotal = myArray.reduce((acc, curval) => {
    console.log(`acc value ${acc} && curval value ${curval}`);
    return acc + curval;

}, 0)

console.log(arrTotal);


let shoppingCart = [
    {
        itemName: "Java Course",
        price: 1200

    },
    {
        itemName: "Javascript Course",
        price: 999

    },
    {
        itemName: "Mobile Dev Course",
        price: 5999

    },
    {
        itemName: "DataScience Course",
        price: 9999

    },
]

const CourseTotal = shoppingCart.reduce((acc, item) => {
    return acc + item.price;

},0)

console.log(CourseTotal);