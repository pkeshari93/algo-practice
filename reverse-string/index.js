// problem
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG' 


function reverse(str) {

    // ********************* Solution 1 *****************************
    // // converting the string to an array to call reverse on it
    // const strArray = str.split(''); 

    // // reversing the array
    // strArray.reverse();

    // // converting the array back to string
    // return strArray.join('');

    // one liner for solution 1
    // return str.split('').reverse().join('');
    // ********************* Solution 1 *****************************


    // ********************* Solution 2 *****************************

    let reversed  = '';
    for (let character of str){
        reversed = character + reversed;
        debugger;    
    }
    return reversed;
    // ********************* Solution 2 *****************************
  
    // ********************* Solution 3 *****************************
    // return str.split('').reduce((reversed, character) =>
    //     character + reversed, ''); 
    // ********************* Solution 3 *****************************
}
reverse('hello'); 

module.exports = reverse;