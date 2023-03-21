import Sound from "./sons.js"

const container = document.querySelector(".container")
const sol = document.querySelector(".sol")
const lua = document.querySelector(".lua")

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const big = document.querySelector(".big")
const small = document.querySelector(".small")

const sonone = document.querySelector("#sonone")
const sontwo = document.querySelector("#sontwo")
const sonthree = document.querySelector("#sonthree")
const sonfour = document.querySelector("#sonfour")

let minutes
let seconds
let timerPause


const sound = Sound()


function countDown(){
    timerPause = setTimeout(() => {
        minutes = Number(minutesDisplay.textContent)
        seconds = Number(secondsDisplay.textContent)

        if (minutes <= 0 && seconds <=0){
            return
        }

        if(seconds <= 0){
            seconds = 3
            minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
        }

        secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
        countDown()

    },1000);
}

play.addEventListener("click", function(){
    countDown()
})

pause.addEventListener("click", function(){
   clearTimeout(timerPause)
})

big.addEventListener('click',function(){
    minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")
})

small.addEventListener('click', function(){
    minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes - 5).padStart(2, "0")

    if (minutesDisplay.textContent < 0) {
        minutesDisplay.textContent = "00"
    }

})

sonone.addEventListener("click", function () {
    sound.buttonForest()
})

sontwo.addEventListener("click", function () {
    sound.buttonRain()
})

sonthree.addEventListener("click", function () {
    sound.buttonCoffee()
})

sonfour.addEventListener("click", function () {
    sound.buttonFire()
})

sol.addEventListener("click", function () {
    container.classList.toggle("dark")
    sol.classList.toggle("hide")
    lua.classList.toggle("hide")
})

lua.addEventListener("click", function () {
    container.classList.toggle("dark")
    lua.classList.toggle("hide")
    sol.classList.toggle("hide")
})