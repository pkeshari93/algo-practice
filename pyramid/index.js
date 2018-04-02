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
function pyramid(n) {
    for (let row = 0; row < n; row++){
        let level = ''
        for(let columns = 0; columns < n + (n-1); columns++){
            let midpoint = Math.floor((2*n)/2)
            if(columns >= midpoint - 1 || columns <= midpoint + 1) level += '#'
        }
        console.log(level) 
    }
}

module.exports = pyramid;