// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// ******************************************* Solution 1 ********************************************
// function anagrams(stringA, stringB) {

//     // using regular expressions to remove spaces, !, etc. and making string lowercase
//     let convertedA = stringA.replace(/[^\w]/g, '').toLowerCase()
//     let convertedB = stringB.replace(/[^\w]/g, '').toLowerCase()

//     const charMapA = map(convertedA)
//     const charMapB = map(convertedB)

//     console.log(charMapA) 
//     console.log(charMapB) 

//     return compareMaps(charMapA, charMapB)
// }

// function map(str){
//     const charMap = {}

//     for (let char of str) {
//         charMap[char] = charMap[char] + 1 || 1
//     }

//     return charMap
// }

// function compareMaps(charMapA, charMapB) {
    
//     if(Object.keys(charMapA).length !== Object.keys(charMapB).length) return false
//     else{
//         for(let char in charMapA){
//             if(charMapA[char] !== charMapB[char]) return false
//         }
//         return true
//     }
// }

// ******************************************* Solution 2 ********************************************

// function anagrams(stringA, stringB) {
//     let convertedA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort()
//     let convertedB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort()

//     if(convertedA.length !== convertedB.length) return false

//     for(let i in convertedA){
//         if(convertedA[i] !== convertedB[i]){
//             return false
//         }
//     }
//     return true
// }

// ******************************************* Solution 3 ********************************************
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}
module.exports = anagrams; 