import Stopwatch from '../script/stopwatch.js'

//State
const pomo = document.getElementById('pomo')
const short = document.getElementById('short')
const long = document.getElementById('long')

//StopWatch
const timeDisp = document.getElementById('stopwatch')

//StateButton
const startbtn = document.getElementById('start-btn')

const StopWatch = new Stopwatch()

let state = false; 
let interval;

let currentMin = 0;
let currentSec = 0;

window.addEventListener('DOMContentLoaded', ()=>{
    const send = browser.runtime.sendMessage({
        action : "ACTIVE",
        state : state })

    send.then( //response of background.js
        (mess)=>{
            currentMin = mess.currentMin
            currentSec = mess.currentSec
            state = mess.state
            playAndPause(state)
        },
        (error)=>{
            console.log(error)
    })
})

window.addEventListener('pagehide', ()=>{
    const send = browser.runtime.sendMessage({
        action : "INACTIVE",
        state : state,
        min : currentMin,
        sec : currentSec
    })
})

startbtn.addEventListener('click', ()=>{
    if (!interval){
        startTimer(25, 0)
        state = true
    }
})

function startTimer(min, sec){
    StopWatch.createTimer(min, sec)
    interval = setInterval(()=>{
        let secsToDisplay = StopWatch.sec
        let minsToDisply = StopWatch.min
        displayTimeProper(minsToDisply, secsToDisplay)
        currentMin = StopWatch.min;
        currentSec = StopWatch.sec;
    }, 1000)
}

function playAndPause(state){
    if(state){
        startTimer(currentMin, currentSec)
    }else{
        console.log("display")
        currentMin = StopWatch.min;
        currentSec = StopWatch.sec;
        if (currentMin !== undefined)
            displayTimeProper(StopWatch.min. StopWatch.sec)
    }
}

function displayTimeProper(mins, secs){
    let min = mins < 10 ? '0' + mins : mins
    let sec = secs < 10 ? '0' + secs : secs

    timeDisp.textContent = `${min} : ${sec}`
}