const http = require('http');

const express = require('express');
const app = express();
const server = http.createServer(app);
const PORT = 3000;

app.get('/', (req,res)=>{
    res.send('Hello, World!')
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
