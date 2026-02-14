# ChinaInfo - Loja de informatica
---
### Biblioteca Utilizadas 

##### Nodemon
```bash
npm install nodemon
```
##### Express
```bash
npm install express
```
##### MySql
```bash
npm install mysql
```
##### Cors
```bash
npm install cors
```
##### BodyParse
```bash
npm install body-parser
```
---
#### Chamando modulos e utilizando bibliotecas

```js

const express = require('express)
const mysql = require('express)
const cors = require('cors)
const bodyParser = require('body-parser)

app.use(express.json())
app.use(cors())


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


```

#### Utilizando o mysql e criando conexão

```js

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sua senha",
    database: "seu banco"
})

```
---
#### Cadastro de produtos
##### FrontEnd
 - Criar Formulario
 - Enviar os dados do formulario para a API
#### BackEnd
```js
    app.post('/produto', (req, res)=>{
        
    })
```