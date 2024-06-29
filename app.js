const http = require('http');
const express = require('express');
const path = require('path')
const app = express();
const{Server} = require('socket.io');
const exp = require('constants');
const server = http.createServer(app);
const io = new Server(server)

app.set('view engine','ejs')
app.set('views',path.resolve(__dirname,'views'))
server.listen(9000,()=>{
    console.log('server listning on port number 9000')
})
io.on("connection",(socket)=>{
    console.log('new user connected ')
    socket.on('user-message',(message)=>{
       io.emit('send-all-to-user',message)
    })
})
app.get('/',(req,res)=>{
   res.render('index.ejs')
})