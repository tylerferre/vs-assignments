const box = document.getElementById("box")
let clicks = 0
let intervalId

document.getElementById("clicks").textContent = localStorage.getItem("numberOfClicks")

box.addEventListener("click", clicked = () =>{
   clicks += 1
   localStorage.setItem("numberOfClicks", clicks)
   let clickCount = localStorage.getItem("numberOfClicks")
   let clickCountBox = document.getElementById("clicks")
   clickCountBox.textContent = clickCount

})


window.addEventListener("keyup", (e) =>{
    if(e.key === " " ||
    e.code == "space" ||
    e.keyCode == 32
    ){
        clicks += 1
        localStorage.setItem("numberOfClicks", clicks)
        let clickCount = localStorage.getItem("numberOfClicks")
        let clickCountBox = document.getElementById("clicks")
        clickCountBox.textContent = clickCount
    }
})

box.addEventListener("mousedown", () =>{
    box.style.backgroundColor = "blue"
})
box.addEventListener("mouseup", () =>{
    box.style.backgroundColor = "cyan"
})


let startTime = 11

var timerDiv = document.getElementById("timer")

var start = document.getElementById("start")
.addEventListener("click", () =>{
    endTimer = ( ) =>{
        clearInterval(interval)
    }
    setTimeout(bruh, 11000)


    var interval = setInterval(timer, 1000)
    
    setTimeout(endTimer, 10000)
})

timer = () =>{
    startTime -= 1 
    console.log(startTime)
    timerDiv.textContent = startTime
}

bruh = () =>{
    console.log("Times up!")
    timerDiv.textContent = "Times Up!"

}

// setTimeout(bruh, 11000)


// var interval = setInterval(timer, 1000)

// setTimeout(endTimer, 10000)
