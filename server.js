const express = require('express');
const http = require('http');
const app =  express();
const server = http.createServer(app);
const PORT = 4000;
const fs = require('fs');
const cron = require('node-cron');

// cron.schedule(" * * * * * *",()=>{
//     console.log("Running a task every second");
// })

// cron.schedule("0/5 * * * *",()=>{
//     console.log("Running a task every 5 minutes");    
// })

// cron.schedule("0 0 1 1 *",()=>{
//     console.log("Running a task every year on January 1st at midnight");    
// })

// cron.schedule("0 0 * * *",()=>{
//     console.log("Running a task every day at midnight");    
// })

// fs.writeFile('hello.txt', 'I am learning Node.js and asynchronus', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("222222");
//     }
// });
// fs.readFile('hello.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(data);
//     }
// });

// fs.appendFile('hello.txt', '\nI am learning Node.js and asynchronus', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("222222");
//     }
// });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

fs.unlink('hello.txt', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("File deleted successfully");
    }
});

app.get('/',(req, res) => {
    res.send('Hello, World!')
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})