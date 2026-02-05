function fnCarregarDados() {
    fetch('http://localhost:8000/unidades', { method: 'GET' })
        .then(response => response.json())
        .then((unidades) => {
            unidades.forEach(unidade => {
                fnMontarCardUnidades(unidade)
            });
        })
}

function fnMontarCardUnidades(unidade) {
    let cartao = `
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
    <div class="card shadow h-100">
        <img class="imagem-card card-img-top" src="${unidade.foto}" alt="">

        <div class="card-body">
            <h5 class="card-title">${unidade.nome_da_loja}</h5>
            <p class="card-text">${unidade.endereco}</p>

            <div class="d-flex flex-column mt-1">
                <span class="mb-1"><strong>Email:</strong> ${unidade.email}</span>
                <span class="mb-1"><strong>Telefone:</strong> ${unidade.telefone}</span>
            </div>
        </div>

        <!-- MAPA -->
        <div class="map-container">
            <iframe
                src="https://maps.google.com/maps?q=${unidade.endereco}&z=14&output=embed"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
</div>
    `
    document.querySelector(".lista-unidades").innerHTML += cartao
}

fnCarregarDados()


