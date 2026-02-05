function fnCarregarDados(){
    fetch('http://localhost:8000/unidades', {method: 'GET'})
        .then(response => response.json())
        .then((unidades)=>{
            unidades.forEach(unidade => {
                fnMontarCardUnidades(unidade)
            });
        })
}

function fnMontarCardUnidades(unidade){
    let cartao = `
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                <div class="card shadow">
                    <img class="imagem-card" src="${unidade.foto}"
                        class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${unidade.nome_da_loja}</h5>
                        <p class="card-text">${unidade.endereco}</p>
                        <div class="d-flex flex-column mt-1">
                            <span class="h5 mb-1">Email ${unidade.email}</span>                     
                            <span class="h5 mb-0">Telefone: ${unidade.telefone}</span>                     
                        </div>
                    </div>
                </div>
            </div>
    `
    document.querySelector(".lista-unidades").innerHTML += cartao
}
 
fnCarregarDados()


