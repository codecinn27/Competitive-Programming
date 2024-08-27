//https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-7-10001st-prime
function isPrime(z){
    if(z===2){
        return true;
    }else if(z<2 || z%2 === 0){
        return false;
    }

    for(let i = 3;i*i<=z; i+=2){ // Use `<=` instead of `<`, will fail if use 9
        if(z%i==0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(11)); // Output: true
console.log(isPrime(9));  // Output: false
console.log(isPrime(17)); // Output: true

function nthPrime(n) {
    const list = [];
    let temp = 0;
    for(let i = 0;i<n;i++){
        temp ++;
        while(!isPrime(temp)){
            temp ++;
        }
        
    }
    return temp;
    
}
  console.log(nthPrime(1000));
  
  nthPrime(10001);

  //better version
// function isPrime(z) {
//     if (z <= 1) return false;
//     if (z <= 3) return true; // 2 and 3 are prime numbers
//     if (z % 2 === 0 || z % 3 === 0) return false; // Eliminate multiples of 2 and 3

//     // Check from 5 to √z, only testing numbers of the form 6k ± 1
//     for (let i = 5; i * i <= z; i += 6) {
//         if (z % i === 0 || z % (i + 2) === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(11)); // Output: true
// console.log(isPrime(25)); // Output: false
// console.log(isPrime(29)); // Output: true
