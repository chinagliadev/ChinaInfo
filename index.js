const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

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
    const data = req.body
    conexao.query('INSERT INTO produtos SET ?', [data],(erro, resultado)=>{
        if(erro){
            res.send(erro)
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

app.post('/unidades/', (req, res)=>{
    const {nome, telefone, email, endereco, latitude, longitute, foto} = req.body

    const sql = `INSERT INTO unidades (nome_da_loja, telefone, email, endereco, latitude, longitude, foto) 
                VALUES ('${nome}', '${telefone}', '${email}', '${endereco}', '${latitude}', '${longitute}', '${foto}')`

    conexao.query(sql, (erro, resultado)=>{
        if(erro) throw erro

        res.send(resultado.insertId)
    })
})

app.post('/login/', (req,res)=>{
    const usuario = req.body.usuario
    const senha = req.body.senha

    conexao.query(`SELECT * FROM usuarios WHERE usuario = '${usuario}' AND senha = '${senha}'`, (error, resultado)=>{
        if(error){
            res.send(error)
        }else{
            if(resultado.length > 0){
                res.status(200).send('Sucesso !')
            }else{
                res.status(401).send('Invalido')
            }
        }
    })
})

app.listen(PORT)
