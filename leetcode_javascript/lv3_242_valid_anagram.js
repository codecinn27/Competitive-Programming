// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//my answer
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

//modify answer, from gpt
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