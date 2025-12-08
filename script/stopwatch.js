export default class Stopwatch{
    constructor(){
        this.interval 
        this.sec
        this.min
    }
    
    createTimer(initmin, initsec){
        let totalSeconds = (initmin * 60) + initsec
        this.interval = setInterval(()=>{
            this.sec = totalSeconds % 60 
            this.min = Math.floor(totalSeconds / 60) 
            totalSeconds -= 1
        },1000)
    }

    clearTimer(){
        clearInterval(this.interval)
    }
}