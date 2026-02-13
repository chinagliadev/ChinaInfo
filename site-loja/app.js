function fnCarregarDados(){

    const paramentros = new URLSearchParams(window.location.search)
    const existe_categoria = paramentros.has('categoria')
    const existe_ordem = paramentros.has('ordenar')

    const categoria = paramentros.get('categoria')


    const link_filtro = document.getElementById('link_filtro')
    const dropdownitem = document.querySelectorAll('.dropdown-item')


    dropdownitem.forEach(drop=>{
        drop.addEventListener('click', ()=>{
            link_filtro.innerHTML = drop.textContent
        })

    })

    let rota_categoria = ''
    if(existe_categoria){
        rota_categoria = paramentros.get('categoria') + '/'
        console.log(rota_categoria)
    }
    
    let rota_ordem = ''
    if(existe_ordem){
        rota_ordem = paramentros.get('ordenar')
        console.log(rota_ordem)
    }

    fetch('http://localhost:3000/produtos/' + rota_categoria + rota_ordem, {method: 'GET'})
        .then(response => response.json())
        .then((produtos)=>{
            console.log(produtos)
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


const filtro = document.querySelector('.filtro')

function criarLink(){

}

