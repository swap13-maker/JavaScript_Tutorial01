/*
What is String 

string is a primitive data type that represents a sequence of characters. 
Strings are used to store and manipulate text.
 You can create strings using single or double quotes.

 Methods of String 
 concat - by using concat method we can connect to string.
 length - by using length method we can show the length of string.
 uppercase - it convert lowercase string into uppercase.
 trim - it can remove white spaces.
 indexat - it gives u an index value
 split - it convert the string into array
 charAt - it returns char at specified index in a string
 replace - it replaces only the first match character







 






*/



const name = "swapnil"; 
const repoCount = 50;

console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Swapnil-Lule-13");
const myName = new String("NIkhilLule");

console.log(gameName == myName);
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.toUpperCase());

const newString = gameName.substring(0,6);
console.log(newString);

const string3 = gameName.concat(" " +myName);
console.log(string3);

const newStringOne = "   Swapnil    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "swapnillule13@gmail.com";
console.log(url.replace('13' , '1998'));
console.log(url);

console.log(url.includes("swapnil"));

console.log(gameName.split('-'));

const strValue = "helloworld"; 
console.log(strValue.repeat(3));