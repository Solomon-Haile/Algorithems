// Sum all numbers in a range

// declare function that takes an array as a parameter
// initialize sum as 0 
// check 2 conditions of orders of an array
// use for loop
// return sum


const sumAll = (arr) => {
    let sum = 0;
    if(arr[0] < arr[1]) {
        for(let i = arr[0]; i <= arr[1]; i++) {
        sum += i;
    }
    return sum;

    } else if(arr[0] > arr[1]) {
        for(let i = arr[1]; i <= arr[0]; i++){
            sum += i;
        }
    }

   return sum;
}

// example
const arr = [5, 10]
console.log(sumAll(arr))