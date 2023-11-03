// 3rd Highest Number in Array

// use for loop
// find 1st largest & 2nd largest then return 3rd largest

const thirdLargest = (arr) => {

    let max1 = arr[0];
    let max2 = 0;
    let max3 = 0;

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max1) {
            max3 = max2;
            max2 = max1;
            max1 = arr[i];
        } else if(arr[i] > max2 && arr[i] < max1) {
            max3 = max2;
            max2 = arr[i];
        } else if(arr[i] > max3 && arr[i] < max2 && arr[i] < max1) {
            max3 = arr[i];
        }
    }
    return max3;
}


// sample example
let x = [3, 5, 9, 7, 89, 67, 90, 78, 566]

//console.log(thirdLargest(x))
