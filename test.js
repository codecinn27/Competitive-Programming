function fiboEvenSum(num){
    let sum=0;
    let v1 = 0;
    let v2 = 1;
    let fibo = 0;

    while(fibo<num){
        fibo = v1 +v2;
        v1 = v2;
        v2 = fibo;
        if(v2%2 ===0){
            sum +=v2;
        }
    }

    return sum;
}

console.log(fiboEvenSum(100000));