const unique = (str) => {
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (str.indexOf(letter) === str.lastIndexOf(letter)) {
            return i
        }
    }
    return -1;
}

console.log(unique('Hello'))
//the output should be 0 because H is the first unique charecter