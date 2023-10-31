
// Solution for the algorithms challenge
const button = document.getElementById('btn');

// 1. print 1 - 135 
button.addEventListener('click', function() {
    for(let i = 1; i <= 135; i++) {
        // console.log(i);
    }
    
    
    // 2. print odd numbers from 1 to 135 
    for(let i = 1; i <= 135; i += 2) {
        //console.log(i);
    }


    // 3. print all numbers from 1 to 135
    // print sum of previous printed number

    let sum = 0;
    for(let i = 1; i <= 135; i++) {
        
        sum += i;
        //console.log('Number is: ' + i + ' ' + 'Sum: ' + sum);
    }
    

    // 4. print the elements of an array
    // use forEach method on array
    let x = [1, 4, 2, 12];
    x.forEach((y) => {
        //console.log(y);
    })
});

// 5. find the maximum value of an array 
// declare an array
// use Math.max 
// use spread operator

const arrayX = [1, 3, 8, -1];
//console.log(Math.max(...arrayX));

// 6. Find the average of a random array 
// declare function to find the sum of array
// divide it by length of array

const arrayX2 = [2, 4, 4, 6];

function findAverage(arrayX2) {

    if(arrayX2.length === 0) {
        return 0; // for empty array
    }

    let sum = 0;
    for(let i = 0; i < arrayX2.length; i++) {
        
        sum += arrayX2[i];
    }

    return sum / arrayX2.length;
}

//console.log(findAverage(arrayX2));

// 7. function that replace negative elements to 0 in an array
// declare empty array 
// use for loop
// use if statement 
// get new array

const x = [3, -6, 7, -7, 9];

function replaceNegative(arr) {
    const xNew = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0) {
            xNew.push(0);
        } else {
            xNew.push(arr[i]);
        }
    }
    return xNew;
}

//console.log(replaceNegative(x));

// 8. replace negative numbers to string in an array
// declare empty array
// use for loop
// use if condition
// output new array

const X = [1, -4, 0, -1];

function replaceNeg(arr) {
    const newArray = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            newArray.push('Turing');
        } else {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

console.log(replaceNeg(X));
