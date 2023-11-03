<<<<<<< HEAD
// this is Thursday's palindrome checker assignment

const isPalindrome = (str) => {
    for(let i = 0; i < str.length / 2; i++) {
        if(str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

=======
// this is Thursday's palindrome checker assignment

const isPalindrome = (str) => {
    for(let i = 0; i < str.length / 2; i++) {
        if(str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

>>>>>>> d8618ae397a8e8297cb0767a0f8c8516be57816e
//console.log(isPalindrome()); 