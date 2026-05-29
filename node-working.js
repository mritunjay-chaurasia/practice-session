// execute top level of code (like console.log, variable declaration)
// execute required modulde (like fs, http, net etc)
// event callback  registered(like socket registered, fs read file registered)
// start event loop
    // for async phases of event loop
        // a- expired timer callback (like setTimeout or setInterval)
        // b- i/o polling like FS
        // c- setImmediate callback (setImmediate(()=>{},0))
        // d- close  callback
        // e- pending callbacks
    // check microtask queue after each callback execution
     // microtask queue (like promise.then, process.nextTick, async/await, MutationObserver, console.log, etc)
     // macrotask queue (like setTimeout, setImmediate, setInterval, I/O polling, etc)



const fs = require('fs')

setTimeout(()=>{console.log("time out log")})

fs.readFile('sample.txt','utf8',(err,text)=>{
    console.log(">>>>>")
    setTimeout(()=>{console.log("file read time out log")},0)
    setImmediate(()=>{console.log("set immediate 44")})
    console.log("66666")
})

setImmediate(()=>{console.log("immediate log")})

