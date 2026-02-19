function fnLimparCampos() {
    document.getElementById("form-cadastro").reset()
}

function fnFazerLogin() {
    let formDados = {
        usuario: document.getElementById('usuario').value,
        senha: document.getElementById('senha').value,
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        permissao: document.getElementById('permissao').value
    }

    fetch('http://localhost:3000/cadastro/',{
        method:'POST',
        headers:{
            'Content-type': 'application/json',
        },
        body: JSON.stringify(formDados)
    }).then(resposta => resposta.status)
      .then((dados)=>{
        fnLimparCampos()
        if(dados == 200){
            console.log("Usuario cadastrado com sucesso")
        }else{
            console.log("Erro ao cadastrar")
        }
      }).catch(erro => console.log(erro.message))
}

let btn_login = document.getElementById("btn-login")
btn_login.addEventListener("click", function () {
    fnFazerLogin()
})