// Title Case a Sentence

// first change sentence to array using split method
// change first letter to capital - toUpperCase method
// the rest to lowercase - toLowerCase & slice method
// use for loop

const sentence = "I'm a little tea pot";

const titleCase = () => {
    let arr = sentence.split(' ');
    for(let i = 0; i < arr.length; i++) {
        const firstLetter = arr[i].charAt(0).toUpperCase();
        const otherLetters = arr[i].slice(1).toLowerCase();

        arr[i] = firstLetter + otherLetters;
    }

    return arr.join(' ');
}

console.log(titleCase(sentence));

  
