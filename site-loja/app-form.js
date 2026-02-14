function fnAlterarFoto() {
    if (foto.value != '') {
        document.getElementById("fundo-imagem").style.backgroundImage = `url('${foto.value}')`
    } else {
        document.getElementById("fundo-imagem").style.backgroundImage = `url('https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
    }
    console.log(foto.value)
}

function fnLimparCampos() {
    document.getElementById("form-produtos").reset()
}

function fnCadastrarProdutos() {

    let formDados = {
        titulo: document.getElementById('titulo').value,
        preco: document.getElementById('preco').value,
        descricao: document.getElementById('descricao').value,
        avaliacao: document.getElementById('avaliacao').value,
        foto: document.getElementById('foto').value,
        categoria: document.getElementById('categoria').value
    }


    fetch('http://localhost:3000/produto/', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(formDados)
    })
        .then(response => response.json())
        .then((dados) => {
            fnLimparCampos()
            gerarToast()
        })
        .catch(err => console.log(err.message))

}

let foto = document.getElementById("foto")
let btn_salvar = document.getElementById("btn-salvar-produto")

foto.addEventListener("blur", () => {
    fnAlterarFoto()
})


btn_salvar.addEventListener("click", () => {
    fnCadastrarProdutos()
})

const toastLiveExample = document.getElementById('liveToast')

function gerarToast() {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()
}

