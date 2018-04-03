// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'    
// function pyramid(n) {
//     for (let row = 0; row < n; row++){
//         let level = ''
//         for(let column = 0; column < n + (n-1); column++){
//             let midpoint = Math.floor((2*n -1)/2)

//             if(midpoint - row <= column && midpoint + row >= column){
//                 level += '#'
//             }
//             else level += ' '
//         }
//         console.log(level) 
//     }
// }

// ************************************** Solution 2 **************************************
function pyramid(n, row = 0, level = '') {
    let midpoint = Math.floor((2*n -1)/2)
    //base case

    if (row === n){
        return
    }

    if (level.length === 2*n -1){
        console.log(level)
        pyramid(n, row+1)
        return
    }

    if (midpoint - row <= level.length && midpoint + row >= level.length){
        level += '#'
    }
    else {
        level += ' '
    }
    pyramid(n, row, level)
}

module.exports = pyramid;