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
---
#### Chamando modulos e utilizando bibliotecas

```js

const express = require('express)
const mysql = require('express)
const cors = require('express)

app.use(express.json())
app.use(cors())

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