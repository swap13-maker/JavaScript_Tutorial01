//Arrays

const marvelHeros = ["spiderman", "ironman", "thor", "hulk"];
const dcHeros =["superman", "batman", "flash"];
const marvelMovies = new Array("infinity war", "endgame", "infinity war2")
console.log(marvelMovies);
console.log(typeof marvelMovies);

let allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros);
console.log(typeof allHeros);

//by using spread method
//it can add all the array variable into single array
const all_super_heros = [...marvelHeros, ...dcHeros, ...marvelMovies];
console.log(all_super_heros);

//flat method - it can add all the array into single array 
// => if we have array inside another array so in that case we used flat method

const new_array1 = [1,2,3,[4,5,6],7,8, [9,[10]]];
console.log(new_array1.flat(Infinity));

//learn isarray, from, of
//isarray used to asked for a quecstion.
//by using of method we convert variables into array.
//by using from method it convert string into array.

//use of of method
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));

//use of isarray method
console.log(Array.isArray("swapnil"));

//use of from method
let another_array = "swapnil"
console.log(Array.from(another_array));

let new_string = new String("swapnil");
console.log(new_string.toUpperCase());



