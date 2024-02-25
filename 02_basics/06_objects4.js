const StudentInfo = {
    firstname: "swapnil",
    lastname: "lule",
    rollno: 68,
    age: 25
}

function getStudent(student){
    return 'student name is ${student.firstname} and his age is ${student.age}'

}
console.log(getStudent(StudentInfo));

const BookDetails = 
    {
        bookname: "book1",
        price: 999,
        type: "History",
        published: 2015
    }
    


function getBooks(bk){
    return `book name is ${bk.bookname}`;
}

console.log(getBooks(BookDetails));