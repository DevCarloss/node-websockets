const Websoket = require('ws')
const client = new Websoket('ws://localhost:8080')

client.on('open',() => {
    console.log('Conectado Ao Servidor')

    client.send('Ola Servidor!')
})

client.on('message',(mensagem) => {
    console.log(`${mensagem}`)
})