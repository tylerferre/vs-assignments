// var box = document.getElementById("box")
// document.getElementById("box")
// .addEventListener("mouseover", function(){
//     var blue = document.querySelector("#box").classList.toggle("blue")
// }
// )

var box = document.getElementById("box")
document.getElementById("box")
.addEventListener("mouseover", function(){
box.style.backgroundColor = "blue"
}
)
var box = document.getElementById("box")
document.getElementById("box")
.addEventListener("mousedown", function(){
box.style.backgroundColor = "red"
}
)
var box = document.getElementById("box")
document.getElementById("box")
.addEventListener("mouseleave", function(){
box.style.backgroundColor = "white"
}
)
var box = document.getElementById("box")
document.getElementById("box")
.addEventListener("dblclick", function(){
box.style.backgroundColor = "green"
}
)
var box = document.getElementById("box")
document.getElementById("box")
.addEventListener("mouseup",  function(){
box.style.backgroundColor = "yellow"
}
)


var box = document.getElementById("box")
window.addEventListener("wheel", function(){
    box.style.backgroundColor = "orange" 
}
)

window.addEventListener("keypress", function (o) {
    if (o.key === "o") {
        box.style.backgroundColor = "orange"
    }
}
)
window.addEventListener("keypress", function (r) {
    if (r.key === "r") {
        box.style.backgroundColor = "red"
    }
}
)
window.addEventListener("keypress", function(w){
    if(w.key === "w") {
        box.style.backgroundColor = "white"
    }
}
)
window.addEventListener("keypress", function(g){
    if(g.key === "g") {
        box.style.backgroundColor = "green"
    }
}
)
window.addEventListener("keypress", function(p){
    if(p.key === "p") {
        box.style.backgroundColor = "rgb(194, 153, 255)"
    }
}
)
window.addEventListener("keypress", function(b){
    if(b.key === "b") {
        box.style.backgroundColor = "blue"
    }
})
window.addEventListener("keypress", function(y){
    if(y.key === "y") {
        box.style.backgroundColor = "yellow"
    }
})
var enter = document.getElementById("enter")
.addEventListener("click", function(){
    var colorPicked = document.getElementById("colorInput").value;
    var changedColor = box.style.backgroundColor = colorPicked
    var boxInput = document.getElementById("box")
    // boxInput.append(changedColor)
}
)