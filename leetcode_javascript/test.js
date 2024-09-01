const isAnagram = (s, t) => {

    if(s.length !== t.length)return false;

    const countS = {};
    const countT = {};

    for(const char of s){
        countS[char] = (countS[char] || 0) +1;
    }

    for(const char of t){
        countT[char] = (countT[char] || 0) +1;
    }

    for(const char in countS){
        if(countS[char] !== countT[char]) return false;
    }

    return true;
}


console.log(isAnagram("rat","car"));
console.log(isAnagram("anagram","nagaram"));
console.log(isAnagram("aacc", "ccac"));   // false
console.log(isAnagram('listen', 'silent')); // true