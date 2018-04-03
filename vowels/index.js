// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// ************************************** Solution 1 ********************************************
// function vowels(str) {
//     let counter = 0
//     for (let char in str){
//         if (str[char].toLowerCase() === 'a' || str[char].toLowerCase() === 'e' || str[char].toLowerCase() === 'i' || str[char].toLowerCase() === 'o' || str[char].toLowerCase() === 'u'){
//             counter ++
//         }
//     }
//     return counter
// }


// ************************************** Solution 2 ********************************************
function vowels(str) {
    let counter = 0
    const vowel = ['a', 'e', 'i', 'o', 'u']

    for (let char of str.toLowerCase()){
        if (vowel.includes(char)){
            counter ++
        }
    }

    return counter
}
module.exports = vowels;