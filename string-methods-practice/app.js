var but1 = document.getElementById("but1")
    .addEventListener("click", () => {
    var hello = "hello"

    var lowercaseHello = hello.toLowerCase()
    var uppercaseHello = hello.toUpperCase()
        console.log(uppercaseHello + lowercaseHello)
})

var but2 = document.getElementById("but2")
    .addEventListener("click", () => {

    var hello = "hello"
    var split = hello.split("")
        console.log(Math.floor(hello.length))

})

var but3 = document.getElementById("but3")
    .addEventListener("click", () => {
    var hello = "hello"
    var slice = hello.slice(0, 2)
    console.log(slice)
})

var but4 = document.getElementById("but4")
.addEventListener("click", () => {
var hello = "hello"
var split = hello.slice(2)
console.log(split)
})


//constructor functions
// function Car(make, model, year, honkSound){
//     this.make = make
//     this.model = model
//     this.year = year
//     this.honkSound = honkSound
// }

// Car.prototype.honk = function() {
//     console.log(this.honkSound)
// }

// var jeep = new Car("Jeep", "Cherokee", 1995, "BEERRPP")
// console.log(jeep)
// jeep.honk()


//template literals
// const name = "joe"
// const greeting = `hello ${name} how are you?`
// console.log(greeting)