//https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-2-even-fibonacci-numbers

function fiboEvenSum(n) {
    //step 0: initially start with 0 and 1 ,after adding both that will be the 1st term of fibo value
    let total = 0;
    let a1 = 0;
    let a2 = 1;
    let temp;

    //step 1: stop until the last value of fibonanci is higher than the test value
    while(a2<n){
        temp = a1 +  a2;
        a1 = a2;
        a2 = temp;

        //step 3: check the latest update value if is even number, then add into the total
        if(a2%2 ==0){
            total +=a2;
        }
        
    }
    return total;
}


console.log(fiboEvenSum(100000));