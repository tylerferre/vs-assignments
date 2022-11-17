//function that returns largest number

//you need to have a functio that takes whats in an array, looks over it,
//and returns the biggest number

//make an array of numbers and then make a function that looks it over
const array = [10, 45, 63, 78]

function largest(numbers){
    let value = numbers[0]

    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > value) value = numbers[i];
    }
    return value;
}
console.log(largest([15, 35, 66, 32]));
console.log(largest([11, 55, 33, 22, 77]));
console.log(largest(array))

//function that returns word and character


// function com(arr, char){

 
//      for(let i = 0; i < arr.length; i++){
//          let index = arr[i].indexOf(char)
//          if(index > -1){
//             return arr[i]
//          }
//      }
//  } 
//  console.log(com(["$$*", "hi!", "&hello^"], "!"))
//  console.log(com(["$$*", "hiA" ], "A"))


 function com(arr, char){

 
    for(let i = 0; i < arr.length; i++){
      if(arr[i].indexOf(char)> -1)
           return arr[i]
        }
    }

console.log(com(["$$*", "hi!", "&hello^"], "!"))



div = (n1, n2) => {

    if((n1 % n2) === 0){ return true
    } else{ return false}
}
console.log(div(10, 5))