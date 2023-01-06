numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// const doubledNumbers = numbers.map( arr => arr * 2)
// console.log(doubledNumbers)


// const stringItUp = numbers.map(arr => arr.toString())
// console.log(stringItUp)

names = ["tyler", "kayla", "mudge"]

// const capital = names.map(arr => arr.charAt(0).toUpperCase() + arr.slice(1))
// console.log(capital)

people = [
    {
        name: "Kayla",
        age: 21
    },
    {
        name: "Mack",
        age: 19
    },
    {
        name: "Bob",
        age: 5
    }
]

// const namesOnly = people.map(arr => arr.name)
// console.log(namesOnly)


// matrix = () =>{
//     if(people.age > 15){
//         const makeString = people.map(arr => arr.name + " can go to the matrix!")
//         console.log(makeString)
//     }else{
//         const makeString = people.map(arr => arr.name + " cannot go to the matrix!")
//         console.log(makeString)
//     }

// }

// matrix()

// const makeString = people.map(arr => {
//     if(arr.age > 15){return arr.name + " can go to the matrix!"
//         }else{return arr.name + " cannot go to the matrix"}
//     })
//     console.log(makeString)

    
    // const inDOM = people.map(arr =>{
    //    return " " + arr.name + " " + arr.age
    // })


    // var main = document.getElementById("main")
    // document.createElement("h1")
    // main.textContent = inDOM
    // main.style.textAlign = "center"
    // console.log(inDOM)




//FILTER ASSIGNMENT

// const greaterThanFive = numbers.filter(arr => arr > 5)
// console.log(greaterThanFive)


// const evenNumbers = numbers.filter(arr => arr % 2 === 0)
// console.log(evenNumbers)


words = ["goose", "taco", "shower curtain"]

// const fiveOrLess = words.filter(arr => arr.length <= 5)
// console.log(fiveOrLess)

peopleInClub = [
    {name: "Kayla", member: true}, 
    {name: "Mack", member: false}, 
    {name: "Mudge", member: true}, 
    {name: "Josh", member: false}
]

// const notInClub = peopleInClub.filter(arr => arr.member === false)
// console.log(notInClub)


const canSeeMatrix = people.filter(arr => arr.age > 18)
console.log(canSeeMatrix)
