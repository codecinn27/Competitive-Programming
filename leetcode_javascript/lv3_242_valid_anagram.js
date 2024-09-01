// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */



//modify answer, from gpt, 72ms runtime
const isAnagram2 = (s, t) => {
    // Early return if lengths differ
    if (s.length !== t.length) return false;

    // Create frequency count objects, using dictionary key and values, best for wording
    const countS = {};
    const countT = {};

    // Count the frequency of each character in both strings
    for (const char of s) {
        countS[char] = (countS[char] || 0) + 1; /* using || to compare if is not found in the dictionary it will 
        give the value of 0 and +1 to it, else use the value stored previously and add it by 1 */
    }
    for (const char of t) {
        countT[char] = (countT[char] || 0) + 1;
    }

    // Compare frequency counts
    for (const char in countS) {
        if (countS[char] !== countT[char]) {
            return false;
        }
    }

    return true;
};

// Example usage
console.log(isAnagram2('listen', 'silent')); // true
console.log(isAnagram2('hello', 'world'));   // false
console.log(isAnagram2("aacc", "ccac"));   // false
console.log(isAnagram2("anagram","nagaram")); //true

//**************************************************** */
//no 1 answer, 36ms runtime
var isAnagram3 = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    var map = {};
    for (var i = 0; i < s.length; i++) {
        if (s[i] in map) {
        map[s[i]] = map[s[i]] + 1;
        continue;
        }
        map[s[i]] = 1;
    }
    for (var i = 0; i < s.length; i++) {
        if (!map[t[i]]) {
        return false;
        }
        map[t[i]] = map[t[i]] - 1;
    }
}

//**************************************************** */

//**************************************************** */
//no 2 answer, 38ms runtime
var isAnagram4 = function(s, t) {
    if(s.length !== t.length) return false

    let hash1 = hashed(s)
    let hash2 = hashed(t)


    for(let key in hash1){
        if(hash1[key] !== hash2[key]){
            return false
        }
    }

    return true;
};

function hashed(str){
    let obj = {}

    for(let s of str){
        obj[s] = (obj[s] || 0) + 1
    }

    return obj
}

//**************************************************** */

/* my answer, can pass the first two test but cannot pass for "ccac" and "aacc" , due to it can loop again the same words, 
so need to remove the words once both s and t is the same */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;  // Early return if lengths differ
    let temp = s.length;
    let j = 0; 
    for (let i=0; i<s.length; i++){
        while(s[i]!== t[j]){
            if(j === temp){
                return false
            }
            j++
        }
        j = 0;
    }
    return true;
};