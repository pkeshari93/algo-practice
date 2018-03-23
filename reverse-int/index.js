// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    // ****************************** Approach 1 **************************************

        reversed = n.toString().split('').reverse().join('')
        // if(n < 0){
        //     reversed = n.toString().split('').reverse().join('')
        //     return parseInt(reversed)*(-1)
        // }
        // else return parseInt(reversed)
    
    // ****************************** Approach 1 **************************************

    // ****************************** Approach 2 **************************************
    
    return parseInt(reversed) * Math.sign(n);
    // ****************************** Approach 2 **************************************
    
    

}

reverseInt(2359);

module.exports = reverseInt;