// OK
function buttonJsCarrinho() {
            
            divJsMostrar = `
            <div id="divHtml2"></div>
            <div class="divHtml4">
        <div id="divHtmlMostrar">
        <button type="button" id="buttonCarrinhoVoltar" onclick="buttonJsVoltar()">X</button>
        <h1 id="h1TituloCarrinho">Carrinho</h1>
        <div id="divHtmlCarrinho"></div>
        <h3 id="h3ValorTotalCarrinho">Valor Total</h3>
        <h4 id="h3ValorTotalCarrinho2">${valorTotal.toFixed(2)}</h4>
        <h3 id="formasPagamentoCarrinho">Formas de pagamento</h3>
        <div class="aaaaa">
        <input class="inputCarrinhoPagamento" type="radio" name="inputHtmlCarrinhoPagamento" value="credito">
        <label for="inputHtmlCarrinhoPagamento">Crédito</label><br>
        </div>
        <div class="aaaaa">
        <input class="inputCarrinhoPagamento" type="radio" name="inputHtmlCarrinhoPagamento" value="debito">
        <label for="inputHtmlCarrinhoPagamento">Débito</label><br>
        </div>
        <div class="aaaaa">
        <input class="inputCarrinhoPagamento" type="radio" name="inputHtmlCarrinhoPagamento" value="pix">
        <label for="inputHtmlCarrinhoPagamento" id="pixPadding">PIX</label>
        </div>
        <br><br>
        <button type="button" id="buttonHtmlCarrinhoContinuar" onclick="processarCompra()">Continuar</button>
        <br>
        </div>
        </div>`
        
        document.getElementById('divHtml').innerHTML = divJsMostrar
        buttonJsCarrinho2() 
        divJsCarrinho = ``
        let limpa = ``
        document.getElementById('divHtmlItems').innerHTML = limpa
        }



        //ALTERADO
        function buttonJsCarrinho2(){
            if(valorTotal != 0){
                produtos3B = produtos3
                for(let i = 0; i < produtos3B.length; i++) {
                divJsCarrinho += `
                <div class="divProdutoListado">
        <button type="button" class="buttonCarrinhoAdicionar" onclick="buttonCarrinhoAdicionarItem('${produtos3B[i].nome}')">+</button>
        <h4>${produtos3B[i].nome} - ${produtos3B[i].preco.toFixed(2)}</h4>
        <button type="button" class="buttonCarrinhoRemover" onclick="ButtonCarrinhoRemoverItem('${produtos3B[i].nome}')">-</button>
        </div>
        `
            }
            }
            
            
        document.getElementById('divHtmlCarrinho').innerHTML = divJsCarrinho
        divJsCarrinho = ``
        }
        function buttonCarrinhoAdicionarItem(p3) {
            for(let i = 0; i < produtos3B.length; i++){
                if(produtos3B[i].nome == p3 && produtos3B[i].quantidade > 0){
                    for(let j = 0; j < produtos.length; j++){
                        if(produtos[j].nome == produtos3B[i].nome){
                            produtos[j].quantidade--
                            temporario = { ...produtos3B[i]}
                            temporario.quantidade--
                            cont++
                    valorTotal += produtos3B[i].preco
                    produtosCarrinho2 += `${produtos3B[i].nome} - ${produtos3B[i].preco.toFixed(2)} \n`
                    alertAdicionarCarrinho = produtosCarrinho2 + `\nValor total: ` + valorTotal.toFixed(2)
                        }
                    
                    
                }
            }}
            if(cont > 0){
                produtos3B.push(temporario)
            temporario = []
            buttonJsCarrinho()
            cont = 0
            }
            
        }
    
        function ButtonCarrinhoRemoverItem(p3) {
            for(let i = 0; i < produtos3B.length; i++){
                if(produtos3B[i].nome == p3) {
                    for(let j = 0; j < produtos.length; j++){
                        if(produtos[j].nome == produtos3B[i].nome){
                            produtos[j].quantidade++
                            let retirar = `${produtos3B[i].nome} - ${produtos3B[i].preco.toFixed(2)} \n`
                            produtosCarrinho2 = produtosCarrinho2.replace(retirar, '')
                            alertAdicionarCarrinho = produtosCarrinho2 + `\nValor total: ` + valorTotal.toFixed(2)
                        }
                    }
                            valorTotal -= produtos3[i].preco
                            produtos3.splice(i, 1) 
                    break
                }
            }
            selectJsPerifericosFunction()
            buttonJsCarrinho()
        }

        function processarCompra(){
            if(document.getElementById('divHtmlCarrinho').innerHTML.trim() != '' &&
        logado == true) {
                alert(`Compra realizada com sucesso!`)
            valorTotal = 0
            buttonJsCarrinho()
            divJsCarrinho = ''
            document.getElementById('divHtmlCarrinho').innerHTML = divJsCarrinho
            localStorage.setItem('ProdutosLS', JSON.stringify(produtos))
            } else if(document.getElementById('divHtmlCarrinho').innerHTML.trim() != '' &&
        logado == false){
                alert(`Realize login antes de concluir uma compra.`)
             } else {
                alert('O carrinho está vazio!')
            }
        }
        //Adicionar ao carrinho atraves da vitrine
         function ButtonJsCarrinhoProdutos(p, n){
            produtosCarrinho.push(p)
            produtosCarrinho2 += `${n} - ${p.toFixed(2)} \n`
            
            valorTotal += p
            for(let i = 0; i < produtos.length; i++){
                if(produtos[i].quantidade > 0 && produtos[i].nome == n && produtos[i].preco == p){
                produtos[i].quantidade--
                produtos3.push(produtos[i])
                }
                
            }
            alertAdicionarCarrinho = produtosCarrinho2 + `\nValor total: ` + valorTotal.toFixed(2)
            alert(alertAdicionarCarrinho)
            selectJsPerifericosFunction()
        }