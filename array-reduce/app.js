numbers = [1, 2, 3, 4, 5]

// const total = numbers.reduce((final, num) =>{
//     final += num
//     return final
// }, 0)

// console.log(total)

// const stringOfNumbers = numbers.reduce((final, num) =>{
//     const join = numbers.join()
//     final.push(join)
//     return final
// } , [])

// console.log(stringOfNumbers)

voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

// const voterCount = voters.reduce((final, voter) =>{
//     if(voter.voted === true){
//         final++
//     }
//     return final
// }, 0)

// console.log(voterCount)


wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

// const total = wishlist.reduce((final, item) =>{
//     final += item.price
//     return final
// }, 0)

// console.log("$" + total)


// arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ]

// const merge = arrays.reduce((final, arr) =>{
//    const cat = arr.join()
//    final.push(cat)
//    return final
// })

// console.log(merge)


const voterInfo = voters.reduce((final, voter) =>{
    if(voter.age >= 18 && voter.age <= 25 && voter.voted == true){
        final.numYoungVotes++
        final.numYoungPeople++
    }else if(voter.age >= 18 && voter.age <= 25){
        final.numYoungPeople++
    }else if(voter.age >= 26 && voter.age <= 35 && voter.voted == true){
        final.numMidVotes++
        final.numMidPeople++
    }else if(voter.age >= 26 && voter.age <= 35){
        final.numMidPeople++
    }else if(voter.age >= 36 && voter.age <= 55 && voter.voted == true){
        final.numOldVotes++
        final.numOldPeople++
    }else if(voter.age >= 36 && voter.age <= 55){
        final.numOldPeople++
    }
    return final
    // return " Name: " + voter.name + ", Age: " + voter.age + ", Voted: " + voter.voted 
}, {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotes: 0,
    numMidPeople: 0,
    numOldVotes: 0,
    numOldPeople: 0
    })

console.log(voterInfo)


