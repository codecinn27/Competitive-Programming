function divisibleByAll(n,value){
    for(let i = 2; i<n;i++){
      if(value%i !=0){
        return false;
      }
    }
    return true;
  }
  
  function smallestMult(n) {
    let value = n;
    while(true){
        if(divisibleByAll(n,value)){
            return value;
        }
      value +=n ;
    }
    
  }
  
  console.log(smallestMult(20));


  //second ans

  function isDivisible(n,value){
    for(let i=2; i<n; i++){
        if(value%i !== 0){
            return false;
        }
    }
    return true;
}

function smallestMult(n){
    let smallest = n;
    while(!isDivisible(n, smallest)){
        smallest += n;
    }
    return smallest;
}

console.log(smallestMult(5)); //60
console.log(smallestMult(7)); //420
console.log(smallestMult(10));  //2520
console.log(smallestMult(13)); //360360
console.log(smallestMult(20)); //232792560
