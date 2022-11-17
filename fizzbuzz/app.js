
var numbers = []

for (var i = 1; i <= 100; i++){
    numbers.push(i)
    if(i % 15 === 0){
        numbers.pop(i)
        numbers.push("fizzbuzz")
    }else if(i % 3 === 0){
        numbers.pop(i)
        numbers.push("fizz")
    }else if(i % 5 === 0){
        numbers.pop(i)
        numbers.push("buzz")
    }
   var fizzbuzz = numbers.join("")
}
console.log(fizzbuzz)

