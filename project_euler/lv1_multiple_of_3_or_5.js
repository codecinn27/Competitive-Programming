function multiplesOf3Or5(number) {

    let total = 0;
    for(let i = 0 ; i<number ; i++){
      if(i%3 ==0) total+=i;
      else if (i%5 == 0) total+=i;
    }

    return total;
}
let x = multiplesOf3Or5(10);
console.log(x);
