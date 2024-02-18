//what is array 
// => Array is non primitive datatype that reperesent similar type of elements similar types means homogeneous.

const myArray = [0,1,2,3,4,5];
//console.log(myArray);

//splice and slice method

//slice
console.log("A",  myArray);
const mynew = myArray.slice(1,3);
console.log("array1:" +myArray);
console.log(mynew);

//splice
console.log("B ", myArray);
const myNew = myArray.splice(1,3);
console.log("array2:" +myArray);
console.log(myNew);