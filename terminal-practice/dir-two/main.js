
var things = document.getElementsByClassName("things")
for (var i = 0; i < things.length; i++) {
    console.log(things[i].innerText)
}

var result = document.querySelector("#myFavThings")
 console.log(result)

// document.getElementById("rip")
// .addEventListener("click", function(){
//     console.log("hi")
// })

// for (var i = 0; i< result.length; i++){
// }
// for (var i = 0; i= result.length; i++){  
// }
// for (var i = 0; i> result.length; i++){
// }
// for (var i = 0; i<100; i++){
// }

document.getElementById("rip")
.addEventListener("click", function(){
    var result = document.querySelectorAll("ol#myFavThings> li")
console.log(Array.from(result))

for (var i = 0; i< result.length; i++) {
    result[i].textContent = "Sike"
}
})


var header = document.getElementById("header")
document.getElementById("headbutt")
.addEventListener("click", function(){
    header.style.color = "blue"
}
)
var header = document.getElementById("header")

document.getElementById("headbutt")
.addEventListener("dblclick", function(){
    header.style.color = "red"
}
)
var waterButton = document.getElementById("waterButton")
document.getElementById("waterButton")
.addEventListener("click", function(){
    var coke = document.querySelector("#water").classList.toggle("coke")
}
)
var newLi = document.createElement("li")
newLi.textContent = "Dog"
var myList = document.getElementById("myFavThings")
myFavThings.append(newLi)

var show = document.getElementById("show")
document.getElementById("show")
.addEventListener("click", function(){
var newP = document.createElement("p")
newP.textContent= "I want to go to bed"
var MyP = document.getElementById(sleep)
sleep.append(newP)
newP.style.color = "white"
newP.style.textAlign = "center"
newP.style.fontSize = "25px"
}
)

document.getElementById("enter").onclick = function(){
    var swigDrink = document.getElementById("textInput").value;
var newSpan = document.createElement("span")
newSpan.textContent = [swigDrink, " is a great choice!"]
var divInput = document.getElementById("inputDiv")
divInput.append(newSpan)
console.log(swigDrink, "is a great choice!")
newSpan.style.color = "black"
newSpan.style.inlineBlock
}
