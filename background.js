import Stopwatch from  './script/stopwatch.js'

browser.runtime.onMessage.addListener((e)=>{
    if (e === 'POPACTIVE'){
        console.log('hello')
    }
})
