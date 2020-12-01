const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send('<h1>Home</h1>')
})

server.post('/contato', (req, res) => {
    res.send('Mensagem enviada com sucesso!')
})

server.get('/contato', (req, res) => {
    res.send(`
        <h1>Contato</h1>
        
        <form action="/contato" method="POST">
            <label for="email">Email:</label>
            <input type="email" name="email" id="email">
            <label for="mensagem">Mensagem:</label>
            <textarea name="mensagem" id="mensagem"></textarea>
            <input type="submit" value="Enviar">
        </form>
    `)
})

server.listen(3001,() => {
    console.log('Servidor de pé em http://localhost:3001')
    console.log('para derrubar o servidor: ctrl + c')
})