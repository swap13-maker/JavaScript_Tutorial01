// let n=27;
// let count=0;

// for (let i = 1; i <=n; i++) {
//     if(n % i == 0){
//         count++;
//     }
    
// }
// if(count == 2){
//     console.log(`${n} is prime number`);
// }else{
//     console.log(`${n} is not prime number`);
// }

function primeNumber(num){
    let cnt = 0;
    for (let i = 1; i <=num; i++) {
        if(num % i == 0){
            cnt++;
        }
        
    }

    if(cnt == 2){
        console.log(`${num} is prime no`);
    }else{
        console.log(`${num} is not prime no`);
    }


}

const checkPrimeNo = primeNumber(13);
console.log(checkPrimeNo);

//reverse string progarm

function reverseString(original){
    let reverse = "";
    for (let i = original.length-1; i >= 0; i--) {
        reverse = reverse + original.charAt(i);
        
    }
    console.log(`original string is ${original}`);
    console.log(`reverse string is ${reverse}`);

    if (reverse === original) {
        console.log("string is palindrome");
    }else{
        console.log("string is not palindrome");
    }

}

console.log(reverseString("SWAPNIL"));