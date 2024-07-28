//https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-2-even-fibonacci-numbers
//my answer
function fiboValue(n) {
    if(n<2){return false}
    n = n-2;
    let temp1 = 1;
    let temp2 = 2;
    let temp3 = 0;
    let arr = [1,2];

    for(let i =0 ;i<n;i++){
        temp3 =temp1 + temp2;
        arr.push(temp3);
        temp1 = temp2;
        temp2 = temp3
    }
    console.log(arr);
    return temp3;
}

function fiboEvenSum(n){
    let sum = 0;
    let arr = [1,2];
    while(arr[arr.length-1]<n){
        let i = arr[arr.length-2];
        let j = arr[arr.length-1];
        let z = i+j;
        arr.push(z);
    }
    for(let i=1;i<arr.length;i++){
        if(arr[i]%2 ==0){
            sum +=arr[i];
        }
    }
    return sum;
}

console.log(fiboValue(10));
console.log(fiboEvenSum(34));

// my previous answer 
// function fiboEvenSum(n) {
//     let first = 1;
//     let sum = 2;
//     let container = [1,2];
    
//     //store fibonacci value into container
//     for(let i = 2; i<n ; i++){
//       let tem = sum;
//       first = first + sum;
//       container[i] = first;
//       sum = first;
//       first = tem;
//     }
//     let result = 0;
//     for(let i =0; i<n; i++){
//         if(container[i]<=n && container[i]%2 ==0){
//             result += container[i];
//           }
//     }
    
//     return result
//   }
  
//   console.log(fiboEvenSum(8))


  //way 2: source answer
//   const fiboEvenSum = (number) => {
//     if (number <= 1) {
//       return 0;
//     } else {
//       let evenSum = 0,
//         prevFibNum = 1,
//         // According to problem description our Fibonacci series starts with 1, 2
//         fibNum = 2; 
//       for (let i = 2; fibNum <= number; i++) {
//         if (fibNum % 2 == 0) {
//           evenSum += fibNum;
//         }
//         [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
//       }
//       return evenSum;
//     }
//   };

//   console.log(fiboEvenSum(44));

