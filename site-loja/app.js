function fnCarregarDados(){
    fetch('http://localhost:8000/produtos', {method: 'GET'})
        .then(response => response.json())
        .then((produtos)=>{
            produtos.forEach(produto => {
                fnMontarCardProduto(produto)
            });
        })
}

function fnMontarCardProduto(produto){
    let cartao = `
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                <div class="card shadow">
                    <img class="imagem-card" src="${produto.foto}"
                        class="card-img-top" alt="${produto.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${produto.titulo}</h5>
                        <p class="card-text">${produto.descricao}</p>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <span class="h5 mb-0">R$ ${produto.preco}</span>
                            <div>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star text-warning"></i>
                                <small class="text-muted">(${produto.avaliacao})</small>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light">
                        <button class="btn btn-primary btn-sm">Comprar</button>
                        <button class="btn btn-outline-secondary btn-sm botao_curtir"><i class="bi bi-heart"></i></button>
                    </div>
                </div>
            </div>
    `
    document.querySelector(".lista-produtos").innerHTML += cartao
}
 
fnCarregarDados()


