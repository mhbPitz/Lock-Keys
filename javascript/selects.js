// MODIFICAR PRODUTOS E IMAGENS 01/07
function selectJsPerifericosFunction() {
            let selectJsPerifericos = document.getElementById('selectHtmlPerifericos').value
    if(selectJsPerifericos === 'option1') {
        divJsMostrar = ``
        document.getElementById('divHtml').innerHTML = divJsMostrar
        for(let i = 0; i < produtos.length; i++){
            if(produtos[i].quantidade > 0) {
            produtos2.push(produtos[i])
            }
        }
        selectJsPrecosFunction()
        produtos2 = []

    } else if(selectJsPerifericos === 'option2') {
        divJsMostrar = ``
        document.getElementById('divHtml').innerHTML = divJsMostrar
        for(let i = 0; i < produtos.length; i++){
            if(produtos[i].quantidade > 0 && produtos[i].tipo == "sobrevivencia") {
            produtos2.push(produtos[i])
            }
        }
        selectJsPrecosFunction()
        produtos2 = []

    } else if(selectJsPerifericos === 'option3') {
        divJsMostrar = ``
        document.getElementById('divHtml').innerHTML = divJsMostrar
        for(let i = 0; i < produtos.length; i++){
            if(produtos[i].quantidade > 0 && produtos[i].tipo == "rogueLike") {
            produtos2.push(produtos[i])
            }
        }
        selectJsPrecosFunction()
        produtos2 = []

    } else if(selectJsPerifericos === 'option4') {
        divJsMostrar = ``
        document.getElementById('divHtml').innerHTML = divJsMostrar
        for(let i = 0; i < produtos.length; i++){
            if(produtos[i].quantidade > 0 && produtos[i].tipo == "rpg") {
            produtos2.push(produtos[i])
            }
        }
        selectJsPrecosFunction()
        produtos2 = []

    } else if(selectJsPerifericos === 'option5') {
        divJsMostrar = ``
        document.getElementById('divHtml').innerHTML = divJsMostrar
        for(let i = 0; i < produtos.length; i++){
            if(produtos[i].quantidade > 0 && produtos[i].tipo == "fps") {
            produtos2.push(produtos[i])
            }
        }
        selectJsPrecosFunction()
        produtos2 = []

    } else if(selectJsPerifericos === 'option6') {
        divJsMostrar = ``
        document.getElementById('divHtml').innerHTML = divJsMostrar
        for(let i = 0; i < produtos.length; i++){
            if(produtos[i].quantidade > 0 && produtos[i].tipo == "construcao") {
            produtos2.push(produtos[i])
            }
        }
        selectJsPrecosFunction()
        produtos2 = []
}
        }
        function selectJsPrecosFunction() {
            let selectJsPrecos = document.getElementById('selectHtmlPrecos').value
    if(selectJsPrecos === 'option1') {
        for(let i = 0; i < produtos2.length; i++){
            if(produtos2[i].quantidade > 0) {
            criarItem = `<div class="divItemsA">
            <h4 id="nomeH4">${produtos2[i].nome}</h4>
            <h5>R$</h5>
            <h6>${produtos2[i].preco.toFixed(2)}</h6>
            <img src="images/${produtos2[i].imagem}" class="itemsImg">
            <button type="button" class="buttonAdicionarCarrinho" onclick="ButtonJsCarrinhoProdutos(${produtos2[i].preco}, '${produtos2[i].nome}')">Adicionar ao carrinho</button>
            <h4 class="itemsH4">estoque: ${produtos2[i].quantidade}</h4>
            </div>
        
        <br><br>`
        produtosAparecendoFiltrados.push(criarItem)
            }
        }
        
        document.getElementById('divHtmlItems').innerHTML =  produtosAparecendoFiltrados.join('')
        produtosAparecendoFiltrados = []
    } else if(selectJsPrecos === 'option2') {
        divJsMostrar = ``
        document.getElementById('divHtml').innerHTML = divJsMostrar
        for(let i = 0; i < produtos2.length; i++){
            if(produtos2[i].quantidade > 0 && produtos2[i].preco <=100) {
            criarItem = `<div class="divItemsA">
            <h4 id="nomeH4">${produtos2[i].nome}</h4>
            <h5>R$</h5>
            <h6>${produtos2[i].preco.toFixed(2)}</h6>
            <img src="images/${produtos2[i].imagem}" class="itemsImg">
            <button type="button" class="buttonAdicionarCarrinho" onclick="ButtonJsCarrinhoProdutos(${produtos2[i].preco}, '${produtos2[i].nome}')">Adicionar ao carrinho</button>
            <h4 class="itemsH4">estoque: ${produtos2[i].quantidade}</h4>
            </div>
        <br><br>`
        produtosAparecendoFiltrados.push(criarItem)
            }
        }
        
        document.getElementById('divHtmlItems').innerHTML =  produtosAparecendoFiltrados.join('')
        produtosAparecendoFiltrados = []
    } else if(selectJsPrecos === 'option3') {
        divJsMostrar = ``
        for(let i = 0; i < produtos2.length; i++){
            if(produtos2[i].quantidade > 0 && produtos2[i].preco <=60) {
            criarItem = `<div class="divItemsA">
            <h4 id="nomeH4">${produtos2[i].nome}</h4>
            <h5>R$</h5>
            <h6>${produtos2[i].preco.toFixed(2)}</h6>
            <img src="images/${produtos2[i].imagem}" class="itemsImg">
            <button type="button" class="buttonAdicionarCarrinho" onclick="ButtonJsCarrinhoProdutos(${produtos2[i].preco}, '${produtos2[i].nome}')">Adicionar ao carrinho</button>
            <h4 class="itemsH4">estoque: ${produtos2[i].quantidade}</h4>
            </div>
        <br><br>`
        produtosAparecendoFiltrados.push(criarItem)
            }
        }
        
        document.getElementById('divHtmlItems').innerHTML =  produtosAparecendoFiltrados.join('')
        produtosAparecendoFiltrados = []
    } else if(selectJsPrecos === 'option4') {
        divJsMostrar = ``
        document.getElementById('divHtml').innerHTML = divJsMostrar
        for(let i = 0; i < produtos2.length; i++){
            if(produtos2[i].quantidade > 0 && produtos2[i].preco <=30) {
            criarItem = `<div class="divItemsA">
            <h4>${produtos2[i].nome}</h4>
            <h5>R$</h5>
            <h6>${produtos2[i].preco.toFixed(2)}</h6>
            <img src="images/${produtos2[i].imagem}" class="itemsImg">
            <button type="button" class="buttonAdicionarCarrinho" onclick="ButtonJsCarrinhoProdutos(${produtos2[i].preco}, '${produtos2[i].nome}')">Adicionar ao carrinho</button>
            </div>
            
        <br><br>`
        produtosAparecendoFiltrados.push(criarItem)
            }
        }
        
        document.getElementById('divHtmlItems').innerHTML =  produtosAparecendoFiltrados.join('')
        produtosAparecendoFiltrados = []
    }
        }