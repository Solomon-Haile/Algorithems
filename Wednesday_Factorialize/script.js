// This is wednesday's basic factorilaize function 

// assume conditions of integer
// use for loop
// retrn product

function factorialize(n) {

    if(n < 0) {
        return undefined;
    } else if (n === 0) {
        return 1;
    } else {
        let product = 1;

        for(let i = 1; i <= n; i++) {
            product *= i;
        }
        return product;
    }
}

console.log(factorialize());