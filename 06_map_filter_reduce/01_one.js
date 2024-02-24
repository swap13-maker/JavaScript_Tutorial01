// use of filter

const myArray = [1,2,3,4,5,6,7,8,9,10];

const findGreaterValue = myArray.filter((val) =>{
    return val > 5;
})
console.log(findGreaterValue);

const books = [
    {
        title: "Book One",
        genre: "Non_fiction",
        publish: 1995,
        edition: 2014
    },
    {
        title: "Book Two",
        genre: "Science",
        publish: 2000,
        edition: 2016

    },
    {
        title: "Book Three",
        genre: "Fiction",
        publish: 2017,
        edition: 2000

    },
    {
        title: "Book Four",
        genre: "History",
        publish: 2013,
        edition: 2015

    },
    {
        title: "Book Five",
        genre: "History",
        publish: 2007,
        edition: 2003

    }

]

let getBooks = books.filter( (bk) => {
    return bk.genre == "History" && bk.publish >= 2000;
})
console.log(getBooks);


 

const Vegetables = ["apple", "banana", "grapes", "pinapple"]

const getLength = Vegetables.filter((string) => {
    return string.length > 5
})
 console.log(getLength);


//print only sum values

 let arrayTwo = [1,2,3,4,5,6,7,8,9]

const newArray = arrayTwo.filter((num) => {
    return num % 2 === 0

})
console.log(newArray);


 