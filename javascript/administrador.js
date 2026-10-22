// OK
function buttonJsAdministrador2 () {
            divJsMostrar = `
            <div class="divHtml2">
            <div id="divHtmlMostrar">
                <button type="button" id="buttonHtmlVoltar" onclick="buttonJsVoltar()">X</button>
            <h1>Administrador</h1>
            <h4>Mostrando Estoque</h4>
            <div id="">
                <select id="selectHtmlEstoquePerifericos" onchange="mostrarProdutosAdmin()">
                    <option value="option1">Filtrar Periféricos</option>
                    <option value="option2">Sobrevivência</option>
                    <option value="option3">Rogue Like</option>
                    <option value="option4">RPG</option>
                    <option value="option5">FPS</option>
                    <option value="option6">Construção</option>
                    </select>
                    <div id="administrador-mostrar-produto">
                        
                    </div>
            </div>
        <button type="button" id="buttonHtmlEstoque" onclick="gerenciarProdutosAdmin()">Gerenciar estoque</button>
        <button type="button" onclick="clearLS()">Limpar Local Storage</button>
        </div>
        <br><br><br>
</div>
        `
            
            document.getElementById('divHtml').innerHTML = divJsMostrar
            let limpa = ``
        document.getElementById('divHtmlItems').innerHTML = limpa
        mostrarProdutosAdmin()
        }
        function clearLS(){
            localStorage.clear()
            produtos = [
  { nome: "Project Zomboid", tipo: "sobrevivencia", preco: 60.00, imagem: "img1.png", quantidade: 3 },
  { nome: "Subnautica", tipo: "sobrevivencia", preco: 89.00, imagem: "img2.png", quantidade: 1 },
  { nome: "Sons of the Forest", tipo: "sobrevivencia", preco: 89.00, imagem: "img3.png", quantidade: 2 },
  { nome: "Don't Starve Together", tipo: "sobrevivencia", preco: 28.00, imagem: "img4.png", quantidade: 4 },
  { nome: "DayZ", tipo: "sobrevivencia", preco: 150.00, imagem: "img5.png", quantidade: 1 },
  { nome: "ARK: Survival Ascended", tipo: "sobrevivencia", preco: 220.00, imagem: "img6.png", quantidade: 1 },
  { nome: "Hades", tipo: "rogueLike", preco: 74.00, imagem: "img7.png", quantidade: 1 },
  { nome: "The Binding of Isaac: Rebirth", tipo: "rogueLike", preco: 50.00, imagem: "img8.png", quantidade: 1 },
  { nome: "Dead Cells", tipo: "rogueLike", preco: 47.00, imagem: "img9.png", quantidade: 2 },
  { nome: "Slay the Spire", tipo: "rogueLike", preco: 47.00, imagem: "img10.png", quantidade: 1 },
  { nome: "Risk of Rain 2", tipo: "rogueLike", preco: 60.00, imagem: "img11.png", quantidade: 1 },
  { nome: "Enter the Gungeon", tipo: "rogueLike", preco: 47.00, imagem: "img12.png", quantidade: 3 },
  { nome: "Baldur's Gate 3", tipo: "rpg", preco: 200.00, imagem: "img13.png", quantidade: 1 },
  { nome: "The Witcher 3: Wild Hunt", tipo: "rpg", preco: 130.00, imagem: "img14.png", quantidade: 1 },
  { nome: "Elden Ring", tipo: "rpg", preco: 230.00, imagem: "img15.png", quantidade: 1 },
  { nome: "Cyberpunk 2077", tipo: "rpg", preco: 200.00, imagem: "img16.png", quantidade: 2 },
  { nome: "The Elder Scrolls V: Skyrim", tipo: "rpg", preco: 149.00, imagem: "img17.png", quantidade: 1 },
  { nome: "Persona 5 Royal", tipo: "rpg", preco: 250.00, imagem: "img18.png", quantidade: 1 },
  { nome: "Counter-Strike 2 (VIP)", tipo: "fps", preco: 32.00, imagem: "img19.png", quantidade: 5 },
  { nome: "Team Fortress 2 (GunMaster package)", tipo: "fps", preco: 24.00, imagem: "img20.png", quantidade: 1 },
  { nome: "Overwatch 2 Ultimate Edition", tipo: "fps", preco: 47.00, imagem: "img21.png", quantidade: 1 },
  { nome: "Tom Clancy's Rainbow Six Siege", tipo: "fps", preco: 60.00, imagem: "img22.png", quantidade: 2 },
  { nome: "DOOM Eternal", tipo: "fps", preco: 149.00, imagem: "img23.png", quantidade: 1 },
  { nome: "Battlefield 2042", tipo: "fps", preco: 250.00, imagem: "img24.png", quantidade: 1 },
  { nome: "Satisfactory", tipo: "construcao", preco: 105.00, imagem: "img25.png", quantidade: 2 },
  { nome: "Terraria", tipo: "construcao", preco: 33.00, imagem: "img26.png", quantidade: 4 },
  { nome: "Cities: Skylines", tipo: "construcao", preco: 150.00, imagem: "img27.png", quantidade: 1 },
  { nome: "Rust", tipo: "construcao", preco: 105.00, imagem: "img28.png", quantidade: 3 },
  { nome: "Factorio", tipo: "construcao", preco: 100.00, imagem: "img29.png", quantidade: 1 },
  { nome: "Valheim", tipo: "construcao", preco: 40.00, imagem: "img30.png", quantidade: 5 }]
  buttonJsAdministrador2()
        }

        function mostrarProdutosAdmin(){
            tipoDeProduto = document.getElementById('selectHtmlEstoquePerifericos').value
            if(tipoDeProduto == 'option1') {
                for(let i = 0; i < produtos.length; i++){
                    recebeValor =
                    `
                    <div class="administrador-produto">
                    <h5>${produtos[i].nome} - ${produtos[i].preco.toFixed(2)} - ${produtos[i].quantidade}</h5>
                    </div>`
                    acumulaValor += recebeValor
            }
            } else if(tipoDeProduto == 'option2') {
                for(let i = 0; i < produtos.length; i++){
                    if(produtos[i].tipo == 'sobrevivencia') {
                        recebeValor =
                    `
                    <div class="administrador-produto">
                    <h5>${produtos[i].nome} - ${produtos[i].preco.toFixed(2)} - ${produtos[i].quantidade}</h5>
                    </div>`
                    acumulaValor += recebeValor
                    }
                }
            } else if(tipoDeProduto == 'option3') {
                for(let i = 0; i < produtos.length; i++){
                    if(produtos[i].tipo == 'rogueLike') {
                        recebeValor =
                    `
                    <div class="administrador-produto">
                    <h5>${produtos[i].nome} - ${produtos[i].preco.toFixed(2)} - ${produtos[i].quantidade}</h5>
                    </div>`
                    acumulaValor += recebeValor
                    }
                }
        } else if(tipoDeProduto == 'option4') {
                for(let i = 0; i < produtos.length; i++){
                    if(produtos[i].tipo == 'rpg') {
                        recebeValor =
                    `
                    <div class="administrador-produto">
                    <h5>${produtos[i].nome} - ${produtos[i].preco.toFixed(2)} - ${produtos[i].quantidade}</h5>
                    </div>`
                    acumulaValor += recebeValor
                    }
                }
            } else if(tipoDeProduto == 'option5') {
                for(let i = 0; i < produtos.length; i++){
                    if(produtos[i].tipo == 'fps') {
                        recebeValor =
                    `
                    <div class="administrador-produto">
                    <h5>${produtos[i].nome} - ${produtos[i].preco.toFixed(2)} - ${produtos[i].quantidade}</h5>
                    </div>`
                    acumulaValor += recebeValor
                    }
                }
            } else if(tipoDeProduto == 'option6') {
                for(let i = 0; i < produtos.length; i++){
                    if(produtos[i].tipo == 'construcao') {
                        recebeValor =
                    `
                    <div class="administrador-produto">
                    <h5>${produtos[i].nome} - ${produtos[i].preco.toFixed(2)} - ${produtos[i].quantidade}</h5>
                    </div>`
                    acumulaValor += recebeValor
                    }
                }
            }
            document.getElementById('administrador-mostrar-produto').innerHTML = acumulaValor
            acumulaValor = ''
        }
        function buttonCarrinhoAdicionarItem2(p3) {
            alert('adicionar')
            for(let i = 0; i < produtos3B.length; i++){
                if(produtos3B[i].nome == p3 && produtos3B[i].quantidade > 0){
                    for(let j = 0; j < produtos.length; j++){
                        if(produtos[j].nome == produtos3B[i].nome){
                            produtos[j].quantidade--
                            temporario = { ...produtos3B[i]}
                            cont++
                    valorTotal += produtos3B[i].preco
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
    
        function ButtonCarrinhoRemoverItem2(p3) {
            alert('remover')
            for(let i = 0; i < produtos3B.length; i++){
                if(produtos3B[i].nome == p3) {
                    for(let j = 0; j < produtos.length; j++){
                        if(produtos[j].nome == produtos3B[i].nome){
                            produtos[j].quantidade++
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




        function gerenciarProdutosAdmin() {
            localStorage.setItem('ProdutosLS', JSON.stringify(produtos))
            tipoDeProduto = document.getElementById('selectHtmlEstoquePerifericos').value
            if(tipoDeProduto == 'option1') {
                for(let i = 0; i < produtos.length; i++){
                    recebeValor =
                    `
                    <div class="administrador-produto">
                    <h5>${produtos[i].nome} - ${produtos[i].preco.toFixed(2)} - ${produtos[i].quantidade}</h5>
                    <button type="button" class="buttonCarrinhoAdicionar" onclick="buttonCarrinhoAdicionarItem2('${produtos[i].nome}')">+</button>
                    <button type="button" class="buttonCarrinhoRemover" onclick="buttonCarrinhoRemoverItem2('${produtos[i].nome}')">-</button>
                    </div>`
                    acumulaValor += recebeValor
            }
            } else if(tipoDeProduto == 'option2') {
                for(let i = 0; i < produtos.length; i++){
                    if(produtos[i].tipo == 'sobrevivencia') {
                        recebeValor =
                    `
                    <div class="administrador-produto">
                    <h5>${produtos[i].nome} - ${produtos[i].preco.toFixed(2)} - ${produtos[i].quantidade}</h5>
                    <button type="button" class="buttonCarrinhoAdicionar" onclick="buttonCarrinhoAdicionarItem2('${produtos[i].nome}')">+</button>
                    <button type="button" class="buttonCarrinhoRemover" onclick="buttonCarrinhoRemoverItem2('${produtos[i].nome}')">-</button>
                    </div>`
                    acumulaValor += recebeValor
                    }
                }
            } else if(tipoDeProduto == 'option3') {
                for(let i = 0; i < produtos.length; i++){
                    if(produtos[i].tipo == 'rogueLike') {
                        recebeValor =
                    `
                    <div class="administrador-produto">
                    <h5>${produtos[i].nome} - ${produtos[i].preco.toFixed(2)} - ${produtos[i].quantidade}</h5>
                    <button type="button" class="buttonCarrinhoAdicionar" onclick="buttonCarrinhoAdicionarItem2('${produtos[i].nome}')">+</button>
                    <button type="button" class="buttonCarrinhoRemover" onclick="buttonCarrinhoRemoverItem2('${produtos[i].nome}')">-</button>
                    </div>`
                    acumulaValor += recebeValor
                    }
                }
        } else if(tipoDeProduto == 'option4') {
                for(let i = 0; i < produtos.length; i++){
                    if(produtos[i].tipo == 'rpg') {
                        recebeValor =
                    `
                    <div class="administrador-produto">
                    <h5>${produtos[i].nome} - ${produtos[i].preco.toFixed(2)} - ${produtos[i].quantidade}</h5>
                    <button type="button" class="buttonCarrinhoAdicionar" onclick="buttonCarrinhoAdicionarItem2('${produtos[i].nome}')">+</button>
                    <button type="button" class="buttonCarrinhoRemover" onclick="buttonCarrinhoRemoverItem2('${produtos[i].nome}')">-</button>
                    </div>`
                    acumulaValor += recebeValor
                    }
                }
            } else if(tipoDeProduto == 'option5') {
                for(let i = 0; i < produtos.length; i++){
                    if(produtos[i].tipo == 'fps') {
                        recebeValor =
                    `
                    <div class="administrador-produto">
                    <h5>${produtos[i].nome} - ${produtos[i].preco.toFixed(2)} - ${produtos[i].quantidade}</h5>
                    <button type="button" class="buttonCarrinhoAdicionar" onclick="buttonCarrinhoAdicionarItem2('${produtos[i].nome}')">+</button>
                    <button type="button" class="buttonCarrinhoRemover" onclick="buttonCarrinhoRemoverItem2('${produtos[i].nome}')">-</button>
                    </div>`
                    acumulaValor += recebeValor
                    }
                }
            } else if(tipoDeProduto == 'option6') {
                for(let i = 0; i < produtos.length; i++){
                    if(produtos[i].tipo == 'construcao') {
                        recebeValor =
                    `
                    <div class="administrador-produto">
                    <h5>${produtos[i].nome} - ${produtos[i].preco.toFixed(2)} - ${produtos[i].quantidade}</h5>
                    <button type="button" class="buttonCarrinhoAdicionar" onclick="buttonCarrinhoAdicionarItem2('${produtos[i].nome}')">+</button>
                    <button type="button" class="buttonCarrinhoRemover" onclick="buttonCarrinhoRemoverItem2('${produtos[i].nome}')">-</button>
                    </div>`
                    acumulaValor += recebeValor
                    }
                }
            }
            document.getElementById('administrador-mostrar-produto').innerHTML = acumulaValor
            acumulaValor = ''
        }
        function buttonCarrinhoAdicionarItem2(p){
            for(let i = 0; i < produtos.length; i++){
                if(produtos[i].nome == p) {
                    produtos[i].quantidade++
                }
            }
            gerenciarProdutosAdmin()
        }
        function buttonCarrinhoRemoverItem2(p){
            for(let i = 0; i < produtos.length; i++){
                if(produtos[i].nome == p) {
                    produtos[i].quantidade--
                }
            }
            gerenciarProdutosAdmin()
        }