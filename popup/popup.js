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

let interval

window.addEventListener('DOMContentLoaded', ()=>{
    browser.runtime.sendMessage('POPACTIVE')
})

browser.tabs.onRemoved.addListener(()=>{
    console.log("tab is closed")
})
startbtn.addEventListener('click', ()=>{
    if (!interval){
        const StopWatch = new Stopwatch(25, 0)
        StopWatch.createTimer()
        interval = setInterval(()=>{
            timeDisp.textContent = `${StopWatch.min} : ${StopWatch.sec} `
        })
    }else{

    }
  
})