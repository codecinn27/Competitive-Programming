function divisibleByAll(n,value){
    for(let i = 2; i<n;i++){
      if(value%i !=0){
        return false;
      }
    }
    return true;
  }
  
  function smallestMult(n) {
    value = n;
    while(true){
        if(divisibleByAll(n,value)){
            return value;
        }
      value +=n ;
    }
    
  }
  
  console.log(smallestMult(20));