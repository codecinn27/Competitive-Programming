function largestPrimeFactor(number) {
    //step 0 : initialize with -1 cause 0 should not be a prime number
    let maxPrime = -1;

    //step 1: less than 2 return false, no prime number found
    if(number<2){
        return false;
    }

  //step 3: if is an even number must divide it until it become odd, so while loop is used
   while(number%2 ===0){
    number /=2;
    maxPrime =2;
   }
    
  //step 4: for loop and increase and reduce the max number
  //step 5: square of i because, we should only loop until the square root of the number, that is the last element to be calculate,
  // the rest factor will be finished calculate already
  //step 6: +=2 , to skip the even number
  //step 7: use while loop, to take out the even number until is left with odd number only
   for(let i = 3; i*i<=number ; i+=2){
        while(number%i ==0){
            maxPrime = i;
            number /= i;
        }
   }

   //step 8: if number is still higher than 2 than means it is an odd number that cannot be divided by any value so it will be the 
   // largest prime number compare to the previous prime number
   if(number >2){
    maxPrime = number;
   }
   console.log(maxPrime);
   return maxPrime;
   
}

largestPrimeFactor(8);