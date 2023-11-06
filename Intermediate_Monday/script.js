/* Find the largest value in a nested array
 and return new array
*/

// declare empty array
// use to 2 iteration variables
// use for loop
// push large value to empty array

function largestValue(arr) {

    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        let max = arr[i][0]
        for(let j = 1; j < arr[i].length; j++) {
            if(arr[i][j] > max) {
                max = arr[i][j]
            }
           
        }
        newArr.push(max);
    }
    
    return newArr;
}

const eg = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]

console.log(largestValue(eg))