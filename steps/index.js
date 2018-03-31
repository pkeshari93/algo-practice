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

function steps(n) {
    
    for(let row = 0; row < n; row++){
        const stair = []        
        for(let column = 0; column < n; column++){
            if(column <= row) stair.push('#')
            else stair.push(' ')
        }
        console.log(stair.join(''))
    }
}

module.exports = steps;