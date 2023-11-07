//Tuesday: Find the longest Word in a String

// 1st split string into array
// assume initial value as longest in the array
// use for loop
// update initial value

const str = "The quick brown fox jumped over the lazy dog";
 


function longestWord(str) {
    const arr = str.split(' ');

    let long = arr[0].length;

    for(let i = 1; i < arr.length; i++) {
        
        if(arr[i].length > long) {
            long = arr[i].length;
        }
    }

    return long
}

//console.log(longestWord(str))