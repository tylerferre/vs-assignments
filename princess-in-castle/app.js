let stat = 2 
let intervalId

class Player {
    constructor(name, status, totalCoins, hasStar){
        this.name = name
        this.status = status
        this.totalCoins = totalCoins
        this.hasStar = hasStar
    }

    poweredUp(){
        stat++
        if(stat == 2){this.status = "Big"}
        if(stat == 3){this.status = "Powered Up!"}
        if(stat == 4){stat = 3}
    }
    
    addCoin(){
        this.totalCoins++
    }

    Die(){
        this.status = "Dead"
        console.log("You Died!")
        clearInterval(intervalId)
    }

    gotHit(){
        stat--
        if(stat == 1){this.status = "Small"}
        if(stat == 2){this.status = "Big"}
        if(stat == 0){
            this.status = "Dead"
            this.Die()
        }
    }

    getStar(){
        let star = Math.floor(Math.random() * 3) + 1;
        if(star == 3 && stat >= 3){
            this.hasStar = true    
            if(this.hasStar == true){
            console.log('You got a Star!')
            this.hasStar = false
            }
        }
    }

// Mario

    printPlayerM(){
        console.log(
                `
Name: ${mario.name}
Status: ${mario.status}
Total Coins: ${mario.totalCoins}
    `
        )
    }

    randNumM = () =>{
        let rand = Math.floor(Math.random() * 3) + 1;
        if(rand == 1){
            this.gotHit()
            this.printPlayerM()
            this.getStar()
        }else if(rand == 2){
            this.poweredUp()
            this.printPlayerM()
            this.getStar()
        }else if(rand == 3){
            this.addCoin()
            this.printPlayerM()
            this.getStar()
        }
    }

// Luigi

    printPlayerL(){
        console.log(
                `
Name: ${luigi.name}
Status: ${luigi.status}
Total Coins: ${luigi.totalCoins}
    `
        )
    }

    randNumL = () =>{
        let rand = Math.floor(Math.random() * 3) + 1;
        if(rand == 1){
            this.gotHit()
            this.printPlayerL()
            this.getStar()
        }else if(rand == 2){
            this.poweredUp()
            this.printPlayerL()
            this.getStar()
        }else if(rand == 3){
            this.addCoin()
            this.printPlayerL()
            this.getStar()
        }
    }
}

const luigi = new Player("Luigi", "Small", 0, false)
const mario = new Player("Mario", "Small", 0, false)

setName = () =>{
    let namePick = Math.floor(Math.random() * 2) + 1;
    if(namePick == 1){
        intervalId = setInterval(mario.randNumM, 1500)
    }else{
        intervalId = setInterval(luigi.randNumL, 1500)  
    }
}

setName()
