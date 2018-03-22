// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    // ******************** Solution 1 **********************************
    // return str.split('').reverse().join('') === str;
    // ******************** Solution 1 **********************************

    // ******************** Solution 2 **********************************
    let reversed = str.split('');
    return reversed.every((character, i) => {
        return character === reversed[reversed.length - i -1];
    });

    // ******************** Solution 2 **********************************
    
}    

module.exports = palindrome;