
export async function createTimer(minutes){
    try{
        if(minutes){
            browser.alarms.create('myAlarm', {
                delayInMinutes : minutes,
                periodInMinutes : 1
            })
        }else{
            console.log(`minutes is not defined`)
        }
    }catch(e){
        console.log(`error ${e}`)
    }
}

//fetch the alarm object as DateObject
export async function getAlarm(){
    try{
        const fetch = await browser.alarms.get('myAlarm')
        if(fetch){
            let timeRemaining = fetch.scheduledTime - Date.now()
            let dateObj = new Date(timeRemaining)
            return dateObj
        }else{
            console.log(`alarm does not exist`)
        }
    }catch(e){
        console.log(e)
    }
}