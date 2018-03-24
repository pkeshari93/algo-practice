// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {}
    let max = 0
    let maxChar = ''

    // creating a map object out of the array
    for (let char of str){
        if(charMap[char]) {
            charMap[char] ++
        }
        else{
            charMap[char] = 1
        }
    }

    for (let char in charMap){
        if(charMap[char] > max){
            max = charMap[char]
            maxChar = char
        }
        else{
            max ++
        }
    }

    // return maxChar
    console.log(charMap)

}
module.exports = maxChar;