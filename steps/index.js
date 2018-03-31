// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   ' 
//       '##  '
//       '### ' spaces  = n - row
//       '####'

// **************************************** Iterative Solution ************************
// function steps(n) {
    
//     for(let row = 0; row < n; row++){
//         const stair = []        
//         for(let column = 0; column < n; column++){
//             if(column <= row) stair.push('#')
//             else stair.push(' ')
//         }
//         console.log(stair.join(''))
//     }
// }

// **************************************** Recursive Solution ************************

function steps(n, row = 0, stair = ''){

    // base case
    if (row === n ) return

    if(stair.length === n){
        console.log(stair)
        steps(n, row+1)
        return
    } 

    if(stair.length <= row){
        stair += '#'
    }
    else{
        stair += ' '
    }
    steps(n, row, stair)
}

module.exports = steps;