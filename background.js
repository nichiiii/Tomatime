import Stopwatch from  './script/stopwatch.js'

const StopWatch = new Stopwatch()

let currentMin = 0;
let currentSec = 0;

let interval = null;
let state = null;

browser.runtime.onMessage.addListener((message, sen, sendResponse)=>{

    if(message.action === "ACTIVE"){
        sendResponse({
            currentMin : currentMin,
            currentSec : currentSec,
            state : state
        })
        StopWatch.clearTimer()
        clearInterval(interval)
        return true
    }

    if(message.action === "INACTIVE"){
        if(message.state){
            startTimer(message.min, message.sec)
        }else{
            currentMin = StopWatch.min;
            currentSec = StopWatch.sec;
        }
        state = message.state
    }
})

function startTimer(min, sec){
    StopWatch.createTimer(min, sec)
    interval = setInterval(()=>{
        currentMin = StopWatch.min;
        currentSec = StopWatch.sec;
        console.log(currentMin)
        console.log(currentSec)
    }, 1000)
}   

