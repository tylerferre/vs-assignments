const readline = require("readline-sync")

console.log("Hi there:) I'm going to ask you a few quick and easy questions today! First off,")

var name = readline.question("what is your name? ", {
    hideEchoBack: true 
});
console.log("Nice to meet you " + name + "!");

var food = readline.question("What is your favorite food? ");
console.log("Wow, " + name + " loves " + food + "!")


animals = ["Monkey", "Elephant", "Hippo", "Red Panda", "Dog"],
index = readline.keyInSelect(animals, "Which animal is your favorite?");

console.log("")

console.log("I bet you look like a " + animals[index] + " HAHA")

console.log("Thats just a joke ;)")

console.log("Okay, just one more Question!")

if (readline.keyInYN("Do you like StarWars?")) {
    console.log("Hell yeah! Me too!")
} else {
    console.log("Wow, What a loser")
}

// if (readline.keyInYN("Do you love your boyfirend?")) {
//     console.log("Yay! :D He loves you too!!");
// } else{
//     console.log("Oh :(")
// }

console.log("")
console.log("Please rate your experience out of 50:")

var readlineSync = require('readline-sync'),
  MAX = 50, MIN = 0, value = 25, key;
console.log('\n\n' + (new Array(20)).join(' ') +
  '[Z] <- -> [X]  FIX: [SPACE]\n');
while (true) {
  console.log('\x1B[1A\x1B[K|' +
    (new Array(value + 1)).join('-') + 'O' +
    (new Array(MAX - value + 1)).join('-') + '| ' + value);
  key = readlineSync.keyIn('',
    {hideEchoBack: true, mask: '', limit: 'zx '});
  if (key === 'z') { if (value > MIN) { value--; } }
  else if (key === 'x') { if (value < MAX) { value++; } }
  else { break; }
}
console.log('\nA You Picked: ' + value + " out of 50");
console.log("Thank you. Have a great day :)")