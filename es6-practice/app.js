// const name = "John"
// const age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])



// const carrots = ["bright orange", "ripe", "rotten"]

// mapVegetables = arr => {
//     arr.map((carrot) => {
//         console.log( { type: carrot, name: "carrot" })
//     })
// }
// mapVegetables(carrots)



const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

    // const filterForFriendly = people.filter(person => person.friendly)
    // console.log(filterForFriendly)

    


    // doMathSum = (a, b) => {
    //     console.log(a + b)
    // }
    
    // produceProduct = (a, b) => {
    //     console.log(a * b)
    // }

    // doMathSum(1,2)
    // produceProduct(2,5)



    // printName = (fN = "Jane", lN = "Doe", a = 100) => {

    //     console.log(`Hi ${fN} ${lN}, how does it feel to be ${a}?`)
    // }

    // printName("Tyler", "Ferre", 21)



    const animals = [
        {
            type: "dog",
            name: "theodore"
        },
        {
            type: "cat",
            name: "whiskers"
        },
        {
            type: "pig",
            name: "piglette"
        },
        {
            type: "dog",
            name: "sparky"
        }
     ];
     
        filterForDogs = (arr) => {
         arr.filter(animal => {
             if (animal.type === "dog") {
                console.log(true)
             } else {
                console.log(false)
             }
         })
     }
     
    filterForDogs(animals)

    const filterDogs = animals.filter(am => am.type === "dog")
    console.log(filterDogs)