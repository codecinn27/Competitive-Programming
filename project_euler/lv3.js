//https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-3-largest-prime-factor

function largestPrimeFactor2(number) {
    let largestPrime = -1;

    // Divide number by 2 to remove all even factors
    while (number % 2 === 0) {
        largestPrime = 2;
        number /= 2;
    }

    // Check for odd factors from 3 onwards
    for (let i = 3; i * i <= number; i += 2) {
        while (number % i === 0) {
            largestPrime = i;
            number /= i;
        }
    }

    // If number is a prime greater than 2
    //can try with 49, 77, 143, 221
    // if dont want run into here can try 81 ,8,18,28,50,100
    if (number > 2) {
        largestPrime = number;
    }

    return largestPrime;
}

// Example usage
console.time("largestPrimeFactor2");
console.log(largestPrimeFactor2(18));
//console.log(largestPrimeFactor2(600851475143)); // Expected output: 6857
console.timeEnd("largestPrimeFactor2"); //largestPrimeFactor2: 21.155ms

/*
explantion for above code:

1) largestPrime = -1;
     ->initializing largestPrime to -1 serves as a clear indicator that no prime factor has been found yet. 
       Initializing it to 0 could be misleading because 0 is not a valid prime number or factor.

2)  while (number % 2 === 0) {
        largestPrime = 2;
        number /= 2;
    }

    -> while (number % 2 === 0) checks if the number is divisible by 2. If it is, then 2 is a factor of the number.
        largestPrime = 2; sets the largestPrime variable to 2 because 2 is a prime factor.
        Removing the Factor:
        divides the number by 2, effectively removing the factor of 2 from the number. This step is repeated until the number is no longer divisible by 2.

3)  for (let i = 3; i * i <= number; i += 2) 

    -> start with 3 ,cause if the number can be divide by 2 then prime number is 2 for initialization, else start with the lowest odd 3
    ->

4)
        while (number % i === 0) {
            largestPrime = i;
            number /= i;
        }
    

    -> calculate only the odd number and skip all the even number (loop all the odd number only)
    -> if can divide by the number , the maximum loop number will get smaller to loop less number
    ->
*/


//my answer too slow 
/*

function isPrime(n,i=2){
    if(n<=2)
        return (n==2)? true: false;
    if(n%i == 0)
        return false;
    if(i*i >n)
        return true;

    //check for next divisor
    return isPrime(n, i+1);
}

function largestPrimeFactor2(number) {
    
    // get division of 4, save memory, max value to loop to get all factor
    
        // const maxDivision = Math.ceil(number/4);
        // // cannot work for number larger than 13195011
    
    const maxDivision = Math.ceil(number/2);
    var emptyArr = [];

    //check whether itself is a factor or not 
    if(isPrime(number))
        return number

    //getting all factor
    
    var getAllFactor = true;
    let i = 1;
    while(getAllFactor){
        if(number%i == 0)
            if(!emptyArr.includes(i))
                emptyArr.push(i);

        if(i<=maxDivision)
            i++;
        else
            getAllFactor = false;
    }

    // console.log("max size is ", emptyArr.length);
    //console.log(emptyArr);
    // console.log(emptyArr[emptyArr.length], ", undefined");

    for(let i = emptyArr.length-1 ; i>0;i--){
        if(isPrime(emptyArr[i]))
            return emptyArr[i];
    }
    

}

function largestPrimeFactor(number) {
    var factors = [];
    var i;

    // Check for factors up to the number itself
    for (i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }

    // Find the largest prime factor
    for (i = factors.length - 1; i >= 0; i--) {
        if (isPrime(factors[i])) {
            return factors[i];
        }
    }
}

console.time("largestPrimeFactorRuntime");
console.log(largestPrimeFactor(13195011011)); // expected output: 20714303
console.timeEnd("largestPrimeFactorRuntime"); //largestPrimeFactorRuntime: 4:58.708 (m:ss.mmm)


console.time("largestPrimeFactor2Runtime");
console.log(largestPrimeFactor2(13195011011)); // Expected output: 20714303
console.timeEnd("largestPrimeFactor2Runtime"); //largestPrimeFactorRuntime: 4:58.708 (m:ss.mmm)

*/

/*
step 0: learn recursion function
step 1: learn how to check prime number
step 2: get all factor, get divsion of 4 and loop from start
step 3: loop all factor to get the largest prime


best way to learn cp 
 -> ask yourself why this algorithm can work
     https://youtube.com/shorts/HuXbBDundnU?si=cg5DxWkiNJjSuHd9
 -> why this algorithm is faster
 */
