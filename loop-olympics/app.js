const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(var i = 0; i < numbers.length; i++){
if(numbers[i] % 2 === 1){
    console.log(numbers[i])
}}

for(var i = numbers.length -1; i >= 0; i--){
    console.log(numbers[i])
}

for(var i = 0; i < fruit.length; i++){
            if(i % 2 === 0){
                console.log(fruit[i])
            }
        }


const people = [
    {
     name: "Mark Hamill",
     occupation: "Actor"
    },
    {
     name: "Post Malone",
     occupation: "Singer"
    },
    {
     name: "Tyler Ferre",
     occupation: "Unemployed"
    }
]

for(var i = 0; i < people.length; i++){
    if(i % 2 === 0){
        console.log(people[i].name + " " + people[i].occupation)
    }
}

const nest = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for(var i = 0; i < nest.length; i++){
    for(var j = 0; j < nest[i].length; j++){
        console.log(nest[i][j])
    }
}