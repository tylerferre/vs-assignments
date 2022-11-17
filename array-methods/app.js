var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop("lettuce")
console.log("vegetables: ", vegetables)

fruit.shift("banana")
console.log("fruit: ", fruit)

var orIndex = fruit.indexOf("orange")
console.log(orIndex)

fruit.push(orIndex)
console.log(fruit)

var vegLength = vegetables.length
console.log(vegLength)

vegetables.push(vegLength)

var food = fruit.concat(vegetables)
console.log(food)

food.splice(4, 2)

food.reverse()

var joined = food.join(", ")
console.log(joined)
