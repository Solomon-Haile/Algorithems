// Intermediate JS Algorithm

// 1. Addition
// declare variable for the sum of numbers
// use for loop
// use if statement
// log the sum to console

let sum = 0;
for(let number = 200; number <= 2700; number++) {
    if((number % 3 === 0 || number % 5 === 0) && !(number % 3 === 0 && number % 5 === 0)) {
        sum += number;
    }
}

//console.log(sum);

// 2. shift values
// declare empty array
// use for loop
// return the new array

function shiftArray(arr) {
    const newArray = [];

    for(let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    
    return newArray;
};
// use given array x 
const arrayX = [2, 1, 6, 4, -7];
//console.log(shiftArray(arrayX));

//3. make FizzBuzz string to array
// declare empty array
// use for loop
// use if statement

function FizzBuzz() {
    const output = [];

    for(let i = 1; i <= 135; i++) {
        if((i % 3 === 0) && (i % 5 === 0)) {
            output.push('FizzBuzz');
        } else if(i % 5 === 0) {
            output.push('Buzz');
        } else if(i % 3 === 0 ) {
            output.push('Fizz');
        } else {
            output.push(i);
        }
    }

    return output;
    
}

//console.log(FizzBuzz());

// 4. Fibonacci series
// initialize starting variables
// use while loop 
// keep the sum until limit / 1000000

function fibonacci(limit) {
    let a = 0;
    let b = 1;
    let sum = 0;

    while(a < limit) {
        sum += a;
        const next = a + b;
        a = b;
        b = next;

    }
    return sum;
}

//console.log(fibonacci(1000000));

// 5. Remove negative array items
// declare new empty array
// use for loop
// use if statement
// throw out negative numbers

function positiveItems(arr) {
    
    const positive = [];
    for(let i = 0; i <= arr.length - 1; i++) {
        
        if(arr[i] > 0) {
            positive.push(arr[i]);
        }
    }
    return positive;
}

const oldArray = [1, -2, 4, 1, -5, -7, -9];
//console.log(positiveItems(oldArray));

// 6. relace string with asterisk
// use 2 parameters one for the array & one for word to replace with asterisk
// dedeclare empty array
// use for of loop 
// use if statement
// use for loop

function changeString (arr, targetword) {
    const outputArray = [];

    for(const word of arr) {
        if(word === targetword) {
            let asterisk = '';
            for(let i = 0; i < targetword.length; i++ ) {
                asterisk += '*';
            }
            outputArray.push(asterisk);
        } else {
            outputArray.push(word);
        }
        
    }

    return outputArray;
}

const z = ['Man','I','Love','The','Matrix','Program'];

//console.log(changeString(z, 'Program'))
