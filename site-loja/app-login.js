
function fnLimparCampos() {
    document.getElementById("form-login").reset()
}

function fnFazerLogin() {
    let formDados = {
        usuario: document.getElementById('usuario').value,
        senha: document.getElementById('senha').value
    }


    fetch('http://localhost:3000/login/',{
        method:'POST',
        headers:{
            'Content-type': 'application/json',
        },
        body: JSON.stringify(formDados)
    }).then(resposta => resposta.status)
      .then((dados)=>{
        fnLimparCampos()
        if(dados == 200){
            console.log("Acesso a pagina de admin")
        }else if(dados == 401){
            console.log("Usuario ou senha invalida")
        }else{
            console.log("Algum erro aconteceu")
        }
      }).catch(erro => console.log(erro.message))
}

let btn_login = document.getElementById("btn-login")
btn_login.addEventListener("click", function () {
    fnFazerLogin()
})