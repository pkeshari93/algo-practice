// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    var finalArray = []
    // let i = 0
    // let f = 0
    // while (i < array.length) {
    //     var subArray = []
    //     for (let s = 0; s < size; s++){
    //         if(array[i]){
    //             subArray[s] = array[i]
    //             i++
    //         }
    //     }
    //     finalArray.push(subArray)
    //     f++
    //     // console.log(i, subArray, f, finalArray)
    // }


    // ************************************* Approach 2 *****************************************
    let i = 0
    let f = 0
    let s = 0
    while (i < array.length){
        //can also be done using .push for array instaed of f
        finalArray[f] = array.slice(i, i + size)
        f++
        i = i + size
        // console.log(i, f, subArray, finalArray[f])
    }
    console.log(i, f, finalArray)

    return finalArray
    
}

module.exports = chunk;