export default class Stopwatch{
    constructor(initmin, initsec){
        this.initmins = initmin
        this.initsecs = initsec
        this.interval 
        this.sec
        this.min
    }
    
    createTimer(){
        let totalSeconds = (this.initmins * 60) + this.initsecs
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