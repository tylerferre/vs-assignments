   const readline = require("readline-sync");

   const name = readline.question("Please input name to begin: ", {
    hideEchoBack: true
   });
    console.log(`Hello ${name}, welcome to The Room`)
    console.log("The goal of this game is to escape...")
    console.log("")

   if(readline.keyInYN("Are you ready to start?")){
    console.log("")
    console.log("Examine the room to find clues, but be careful. You're on your own...")
}else{
    console.log("Goodbye")
    return}

    const inRoom = true
    let hasKey = false
    while(inRoom){

    const choices = ["Open the Door", "Hole in the wall", "Floor matt"]
    select = readline.keyInSelect(choices)

    if( select === 0){
        console.log("")
        console.log("Door is locked")

    } else if(select === 1) {
        console.log("")
        console.log("There's a random hole in the wall. It looks dark.")
        if( readline.keyInYN("Put your hand in the hole?")){
            console.log("")
        console.log("YOU DIED")
        console.log("GAME OVER")
        break

    } else{
        console.log("")
        console.log("You didn't do anything")}

    } else if(select === 2){
        console.log("")
        console.log("You found a key!")
        hasKey = true
        if(readline.keyInYN("Use key on door?")){
            console.log("")
            console.log("The door opened!")
            console.log("")
            console.log(`Good job ${name} YOU WIN!!`)
            break
        }else{console.log("")}
    }
}
    
