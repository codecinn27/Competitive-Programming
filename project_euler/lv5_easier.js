//refs: https://www.youtube.com/watch?v=2QyJ8STyo6I
function is_evenly_divisible(n,value){
    for(let i = 2; i<n ; i++){
        if(value%i != 0){
            return false;
        }
    }
    return true;
}

function smallestMult(n){
    let smallest = n;
    let found = false;
    while(!found){
        if(is_evenly_divisible(n,smallest)){
            found = true;
            return smallest;
        }
        smallest +=n;
    }
}



console.log(smallestMult(20));
