function fnLimparCampos() {
    document.getElementById("formUnidades").reset()
}
 
function fnCadastrarProdutos() {

    let formUnidades = {
        nome: document.getElementById('nomeLoja').value,
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value,
        endereco: document.getElementById('endereco').value,
        latitude: document.getElementById('latitude').value,
        longitute: document.getElementById('longitute').value,
        foto: document.getElementById('foto').value
    }

    console.dir(formUnidades)

    fetch('http://localhost:3000/unidades/', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(formUnidades)
    })
        .then(response => response.json())
        .then((dados)=>{
            fnLimparCampos()
            console.log(dados)
        })
        .catch(err=>console.log(err.message))
        
}

let foto = document.getElementById("foto")
let btn_salvar = document.getElementById("btn-salvar-unidades")


btn_salvar.addEventListener("click",  ()=> {
    fnCadastrarProdutos()
})


 