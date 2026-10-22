        let nomeJs
        let emailJs
        let numeroJs
        let senhaJs
        let senhaRepetidaJs
        let alertAdicionarCarrinho
        let logado = false
        let cont3 = 0
        let tipoDeProduto
        let recebeValor
        let acumulaValor = ``
        let produtos3B
        let produtos3C
        let temporario = []
        let valorTotal = 0
        let cont = 0
        let produtos2B = []
        let produtosCarrinho = []
        let produtosCarrinho2 = []
        let produtosCarrinho3 = []
        let divJsItems
        let criarItem
        let divJsMostrar
        let produtos = [
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
        let produtos2 = [

        ]
        let produtos3 = [

        ]
        let produtosAparecendo = [

        ]
        let produtosAparecendoFiltrados = [

        ]
        let divJsCarrinho = ''
        let inputHtmlPesquisa