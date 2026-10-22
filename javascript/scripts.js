window.onload = selectJsPerifericosFunction
window.onload = function (){
    produtos = JSON.parse(localStorage.getItem('ProdutosLS')) || [
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
  { nome: "Valheim", tipo: "construcao", preco: 40.00, imagem: "img30.png", quantidade: 5 }
    ]
    selectJsPerifericosFunction()
}

// FUNCTION OK
function buttonJsVoltar() {
            let divJsMostrar = ``
            selectJsPerifericosFunction()
        }
            document.addEventListener('keydown', function(evento){
                if(evento.key === 'Enter') {
                    inputHtmlPesquisa = document.getElementById('inputHtmlPesquisa').value
                    inputHtmlPesquisa2 = inputHtmlPesquisa.split(' ').map(nomePesquisado=>nomePesquisado.charAt(0).toUpperCase() + nomePesquisado.slice(1).toLowerCase()).join(' ')
                    if(inputHtmlPesquisa != '') {
                        inputJsPesquisaFunction()
                        document.getElementById('divHtml').innerHTML = ''
                    } else {
                        selectJsPerifericosFunction()
                        
                    }
                    }
                })
                inputJsPesquisa = document.getElementById('inputHtmlPesquisa')
                inputJsPesquisa.addEventListener('input', function (){
                    if(this.value == '') {
                        selectJsPerifericosFunction()
                    }
                })

        // FUNCTION OK
        function inputJsPesquisaFunction(){
    const termoPesquisado = inputHtmlPesquisa.toLowerCase().trim()
    const produtosEncontrados = produtos.filter(produto => 
        produto.nome.toLowerCase().includes(termoPesquisado)
    )
    if (produtosEncontrados.length > 0) {
        produtosAparecendoFiltrados = []
        document.getElementById('selectHtmlPerifericos').value = 'option1'
        document.getElementById('selectHtmlPrecos').value = 'option1'
        for(let i = 0; i < produtosEncontrados.length; i++) {
            
            criarItem = `<div class="divItemsA">
            <h4 id="nomeH4">${produtosEncontrados[i].nome}</h4>
            <h5>R$</h5>
            <h6>${produtosEncontrados[i].preco.toFixed(2)}</h6>
            <img src="images/${produtosEncontrados[i].imagem}" class="itemsImg">
            <button type="button" class="buttonAdicionarCarrinho" onclick="ButtonJsCarrinhoProdutos(${produtosEncontrados[i].preco}, '${produtosEncontrados[i].nome}')">Adicionar ao carrinho</button>
            <h4 class="itemsH4">estoque: ${produtosEncontrados[i].quantidade}</h4>
            </div>
            
            
            
            <br><br>`
            produtosAparecendoFiltrados.push(criarItem)
            
        }
        document.getElementById('divHtmlItems').innerHTML =  produtosAparecendoFiltrados.join('')
        //O join está aqui pra não aparecerem virgulas na tela, pq o javascript colocaria automaticamente um join(',') para juntar os elementos dentro do array. Se eu coloco join('') estou determinando que vai juntar cada elemento do código com um vazio
            produtosAparecendoFiltrados = []
        
    } else {
        alert('Nenhum produto encontrado.')
        document.getElementById('inputHtmlPesquisa').value = ''
        document.getElementById('selectHtmlPerifericos').value = 'option1'
        document.getElementById('selectHtmlPrecos').value = 'option1'
        selectJsPerifericosFunction()
    }
}

