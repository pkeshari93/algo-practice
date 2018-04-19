// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// ****************************************** Iterative Solution ***********************************************
function fib(n) {
    var fibArray = [0, 1]

    for (let i  = 2; i <= n; i++){
        fibArray.push(fibArray[i-2] + fibArray[i-1])
    }
    return fibArray[n]
}

// ****************************************** Recursive Solution ***********************************************


// function fib(n){

//     var fib = [0, 1]
//     if (n === 0){
//         return 0
//     }
//     else if (n === 1){
        
//         return 1
//     }
//     else {
//         if ()
//     }
// }   

module.exports = fib;