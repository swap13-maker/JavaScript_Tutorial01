// object part 2 


//use of assign method - by using this method we can copying two object elements into targer object.
const indianPlayerScore = {a:15, b:50};
const pakPlayerScore = {c:10, d:30};

//using assign method
const returnallPlayerScore = Object.assign({}, indianPlayerScore, pakPlayerScore);

//using spread method
const returnallPlayerScore1 = {...indianPlayerScore, ...pakPlayerScore};

console.log(returnallPlayerScore);

console.log(returnallPlayerScore1);

//

const courseDetails = {
    coursename: "react js course",
    Medium: "hindi",
    price: "fress",
    courseInstructor: "swapnil"

}

const {courseInstructor: instructor} = courseDetails
console.log(instructor);


