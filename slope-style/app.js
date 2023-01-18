// collectAnimals = (...anm) => {
//     console.log(anm)
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "panda", "frog");



// combineFruit = (fruit, sweets, vegetables) => {
    
//     console.log({fruit})
//     console.log({sweets})
//     console.log({vegetables})
// }

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot", "potato"])



// parseSentence = ({location, duration}) => {
//     console.log(`We're going to have a good time in ${location} for ${duration}`)
//   }
  
//   parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   });



// returnFirst = (items) => {
//     const [firstItem] = items;
//     console.log(firstItem) 
// }

// returnFirst(["hi", "hello", "hey", "howdy"])



// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// returnFavorites = (arr) => {
//     const firstFav = arr[1]
//     const secondFav = arr[4]
//     const thirdFav = arr[2]
//     console.log(`My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`)
// }

// returnFavorites(favoriteActivities)




// combineAnimals = (arr, ...arr2) => {
//     console.log(arr.concat(...arr2))
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];
// const bigAnimals = ["elephant"]

// combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals, bigAnimals);



product = (a, b, c, d, e) => {
    const numbers = [a,b,c,d,e];
  
    numbers.reduce((acc, number) => {
      const result = acc * number;
       console.log(result)
    }, 1) 
  }
  
product()





// populatePeople = (names) => {
//     names.map((name) => {
//        const split = name.split(" ");
//         const firstName = split[0]
//         const lastName = split[1]
//         console.log( {
//             firstName: firstName,
//             lastName: lastName
//         })
//     })
// }

// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones", "Tyler Ferre"])
