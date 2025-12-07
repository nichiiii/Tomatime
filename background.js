import Stopwatch from  './script/stopwatch.js'

const StopWatch = new Stopwatch()
let currentMin = 0;
let currentSec = 0;
let interval;
browser.runtime.onMessage.addListener((mess, sen, sendResponse)=>{
    if(mess.action === "ACTIVE"){
        sendResponse({
            currentMin : currentMin,
            currentSec : currentSec
        })
        StopWatch.clearTimer()
        return true
    }
    if(mess.action === "INACTIVE"){
        startTimer(mess.min, mess.sec)
    }
})

function startTimer(min, sec){
    StopWatch.createTimer(min, sec)
    interval = setInterval(()=>{
        currentMin = StopWatch.min;
        currentSec = StopWatch.sec;
        console.log(currentMin, currentSec)
    }, 1000)
}   

