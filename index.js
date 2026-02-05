const express = require('express')
const app = express()
const PORT = 8000

app.use(express.json(),)

let mysql = require('mysql')

let conexao = mysql.createConnection({
    host: "108.179.193.209",
    user: "gutoxa27_alunos",
    password: "JD_eXLNHp1ZG",
    database: "gutoxa27_bd_loja"
})

conexao.connect((error) => {
    if (error) {
        console.log('Deu ruim na conexão\n')
        throw error
    } else {
        console.log('Conexao deu bom\n')
    }
})

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send('ChinaInto')
})

app.get('/produtos', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    conexao.query('SELECT * FROM produtos', (error, lista_produtos, campos) => {
        res.send(lista_produtos)
    })
})

app.get('/unidades', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    conexao.query('SELECT * FROM unidades', (error, lista_unidades, campos)=>{
        res.send(lista_unidades)
    })
})



app.listen(PORT)
