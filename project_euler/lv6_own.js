
function sumOfSquare(n){
    let temp = 0;
    let list = [];
    let value = 0;
    for(let i =1;i<=n; i++){
        temp = i*i;
        list.push(temp);
    }
    for(let i = 0; i<n;i++){
        value += list[i];
    }
    return value;

}

function squareOfSum(n){
    let value = 0;
    for(let i =1 ;i<=n;i++){
        value +=i;
    }
    value = value**2;
    return value;

}
function sumSquareDifference(n) {
    let difference = 0;
    difference = squareOfSum(n) - sumOfSquare(n);
    return difference;
  }
  

console.log(squareOfSum(10));

console.log(sumOfSquare(10));
console.log(sumSquareDifference(10));

