const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

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

app.get('/produtos/:categoria', (req, res) => {

    const categoria = req.params.categoria

    conexao.query(`SELECT * FROM produtos WHERE categoria = '${categoria}'`, (error, lista_produtos, campo) => {
        res.send(lista_produtos)
    })
})

app.get('/produtos', (req, res)=>{

    const sql = 'SELECT * FROM produtos'

    conexao.query(sql, (error, lista_produtos, campo)=>{
        res.send(lista_produtos)
    })
})

app.get('/unidades', (req, res) => {
    conexao.query('SELECT * FROM unidades', (error, lista_unidades, campos)=>{
        res.send(lista_unidades)
    })
})

app.post('/produto', (req,res)=>{
    const {titulo, preco, descricao, avaliacao, foto, categoria} = req.body

    console.log(titulo)
    console.log(preco)
    console.log(descricao)
    console.log(avaliacao)
    console.log(foto)
    console.log(categoria)

    const sql = `INSERT INTO produtos 
                (titulo, foto, descricao, preco, avaliacao, categoria)
                VALUES('${titulo}', '${foto}', '${descricao}', ${preco}, ${avaliacao}, '${categoria}')`


    conexao.query(sql, (erro, resultado)=>{
        if(erro){
            throw erro
        }

        res.send(resultado.insertId)
    })
})

app.get('/produtos/:categoria/:ordenar', (req, res)=>{
    const {categoria, ordenar} = req.params

    conexao.query(`SELECT * FROM produtos WHERE categoria = '${categoria}' ORDER BY ${ordenar} ASC`, (error, produto_filtrado, campo)=>{
        res.send(produto_filtrado)
    })
    
})

app.listen(PORT)
