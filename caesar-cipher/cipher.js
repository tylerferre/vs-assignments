const readline = require('readline-sync');
const input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
const shift = parseInt(readline.question('How many letters would you like to shift? '));


const cipher = (input, shift) => {
    let result = ''

    for(let i = 0; i < input.length; i++){
        let code = input.charCodeAt(i);

        if(code >= 65 && code <= 90){
            code = ((code - 65 + shift % 26) + 65)
        }else if(code >= 97 && code <= 122){
            code = ((code - 97 + shift) % 26) + 97
        }

        result += String.fromCharCode(code)
    }
    return result
}

const message = cipher(input, shift)
console.log(message)