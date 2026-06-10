const express = require('express');
const app = express();
const cluster = require('cluster');
const http = require('http');
const os = require('os');

const server = http.createServer(app);
const PORT = 3000;


const numCPUs = os.cpus().length;
// console.log(`Number of CPU cores: ${numCPUs}`);
if (cluster.isPrimary) {
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    app.get('/', (req, res) => {
        res.send('Hello, World!')
    })
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
    console.log(`Worker ${process.pid} started`);
}







