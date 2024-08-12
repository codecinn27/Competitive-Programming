//https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-5-smallest-multiple
function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  
  function smallestMult(n) {
    let value = 1;
    for (let i = 2; i <= n; i++) {
      value = lcm(value, i);
    }
    return value;
  }
  
  console.log(smallestMult(5)); // Output should be 60
  console.log(smallestMult(10)); // Output should be 2520
  console.log(smallestMult(13)); // return 360360.
  



  //my wrong answers

  /*
  
  function smallestMult(n) {
  let value = 1;

  if(n==0){
    return 0;
  }

  if(n==1){
    return 1;
  }
  let list = [];
  for(let i = n; i>1; i--){
    value *=i;
    list.push(i);
  }

  let temp = value;
  let divisiblebyAll = true;
  for(let i = temp-list[0]; i>0;i-=list[0]){
    for(let j = 0; j<list.length-1; j++){
      if(i%list[j] !=0 ){
        divisiblebyAll = false;
        break;
      }
    }
    if(divisiblebyAll){
      temp = i;
    }
  }
  
  if(temp<value){
    value =temp;
  }
  return value;
}

console.log(smallestMult(5));


  */