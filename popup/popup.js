import Stopwatch from '../script/stopwatch.js'

const get = document.getElementById('get')
const btn = document.getElementById('btn')

//State
const pomo = document.getElementById('pomo')
const short = document.getElementById('short')
const long = document.getElementById('long')

//StopWatch
const timeDisp = document.getElementById('stopwatch')

//StateButton
const startbtn = document.getElementById('start-btn')

const StopWatch = new Stopwatch()
let interval;
let currentMin = 0;
let currentSec = 0;

window.addEventListener('DOMContentLoaded', ()=>{
    const send = browser.runtime.sendMessage({
        action : "ACTIVE"})

    send.then(
        (mess)=>{
            currentMin = mess.currentMin
            currentSec = mess.currentSec
        },
        (error)=>{
            console.log(error)
    })    
})

window.addEventListener('pagehide', ()=>{
    const send = browser.runtime.sendMessage({
        action : "INACTIVE",
        min : currentMin,
        sec : currentSec
    })
})

startbtn.addEventListener('click', ()=>{
    if (!interval){
        startTimer(25, 0)
    }
})

function startTimer(min, sec){
    StopWatch.createTimer(min, sec)
    interval = setInterval(()=>{
        timeDisp.textContent = `${StopWatch.min} : ${StopWatch.sec}`
        currentMin = StopWatch.min;
        currentSec = StopWatch.sec;
    }, 1000)
}