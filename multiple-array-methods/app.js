peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


const over18 = peopleArray.filter((arr) =>{
    if(arr.age > 18){
        return arr
    }
})

const sort = over18.sort((a, b) => a.lastName.localeCompare(b.lastName))
console.log(sort)

// const map = peopleArray.map(arr =>{
    
//     return arr.firstName + " " + arr.lastName + " is " + arr.age
// })

// console.log(map)

// const list = document.getElementById("list")
// document.createElement("li")
// list.textContent = map
// list.style.textAlign = "center"


const name1 = sort.reduce((final, arr) =>{
    final.push(
    '<li>' + arr.firstName + ' ' + arr.lastName + ' is ' + arr.age + '</li>')
    const list = document.getElementById("list")
    document.createElement("li")
    list.toString()
    list.textContent = final
    list.style.textAlign = "center"
    list.style.marginLeft = "30%"
    list.style.marginRight = "30%"
    return final
}, [])
console.log(name1)


