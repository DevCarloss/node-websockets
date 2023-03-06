const Websocket = require('ws')
const server = new Websocket.Server({port:8080})

server.on('connection',(socket) => {
    console.log('Cliente Connectado')
    
    socket.on('message',(mensagem) => {
        console.log(`${mensagem}`)

    })

    socket.send('Ola Seja Bem Vindo Ao Servidor')
})