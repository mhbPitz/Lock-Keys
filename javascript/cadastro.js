
function buttonJsCadastro(){
    let divJsMostrar = `
				<div id="divHtml2"></div>
				<div class="divHtml3">
				<button type="button" id="buttonCadastroVoltar" onclick="buttonJsVoltar()">X</button>
                <h1 id="h1TituloCadastro">Cadastro</h1><br>
				<h5 class="h5Cadastro">Nome</h5><input type="text" class="inputCadastro" id="nomeHtmlCadastro" placeholder="João Silva"><br>
				<h5 class="h5Cadastro">Email</h5><input type="text" class="inputCadastro" id="emailHtmlCadastro" placeholder="exemplo@gmail.com"><br>
				<h5 class="h5Cadastro">Telefone</h5><input type="text" class="inputCadastro" id="telefoneHtmlCadastro" placeholder="(00) 00000-0000"><br>
				<h5 class="h5Cadastro">Senha</h5><input type="password" class="inputCadastro"id="senhaHtmlCadastro" placeholder="Mínimo 11 caracteres"><br>
				<h5 class="h5Cadastro">Repetir senha</h5><input type="password" class="inputCadastro" id="senhaRepetidaHtmlCadastro" placeholder="Repita a senha"><br>
				<button type="button" id="buttonHtmlCadastroContinuar" onclick="gravarCadastro()">Continuar</button></div>
		`
        document.getElementById('divHtml').innerHTML = divJsMostrar

		divJsMostrar = ''
		document.getElementById('divHtmlItems').innerHTML = divJsMostrar
}		
		function gravarCadastro(){
			//Nome
			nomeJs = document.getElementById('nomeHtmlCadastro').value.replace(/\s+/g, ' ').trim().toLowerCase()
			let nomeJsTemporario = nomeJs.split(' ')
			let nomeJsTemporario2 = []
			for(let i = 0; i < nomeJsTemporario.length; i++){
					nomeJsTemporario[i] = nomeJsTemporario[i].charAt(0).toUpperCase() + nomeJsTemporario[i].slice(1)
					nomeJsTemporario2.push(nomeJsTemporario[i])
			}
			nomeJs = nomeJsTemporario2.join(' ')
			if(nomeJs.length < 50
				&& !/[^a-zA-ZçÇÁáã\s]+/g.test(nomeJs)){

				} else {
					alert('Ocorreu um erro de digitação no seu nome.')
					document.getElementById('nomeHtmlCadastro').value = ''
					return
				}

			//Email
			emailJs = document.getElementById('emailHtmlCadastro').value.toLowerCase()
			if(emailJs.length > 10
				&& emailJs.endsWith('@gmail.com')
				&& !/[^a-zA-Z0-9@#$%!_.=+-]+/g.test(emailJs)) {

				} else {
					alert('Ocorreu um erro de digitação no seu email.')
					document.getElementById('emailHtmlCadastro').value = ''
					return
				}

			//Telefone
			telefoneJs = document.getElementById('telefoneHtmlCadastro').value.replaceAll(/[\s()-]+/g, "")
			if(telefoneJs.length == 11
				&& !/[^0-9]+/g.test(telefoneJs)){
					
				} else {
					alert('Ocorreu um erro de digitação no seu telefone.')
					document.getElementById('telefoneHtmlCadastro').value = ''
					return
				}

				//Senha
			senhaJs = document.getElementById('senhaHtmlCadastro').value
			if(senhaJs.length >= 11){

				} else {
					alert('Ocorreu um erro de digitação na sua senha.')
					document.getElementById('senhaHtmlCadastro').value = ''
					return
				}

				//Senha repetida
				senhaRepetidaJs = document.getElementById('senhaRepetidaHtmlCadastro').value
				if(senhaJs == senhaRepetidaJs){

				} else {
					alert('As senhas não coincidem.')
					document.getElementById('senhaRepetidaHtmlCadastro').value = ''
					return
				}

			let conjuntoInformacoes = {
				nome: nomeJs,
				email: emailJs,
				telefone: telefoneJs,
				senha: senhaJs
			}
			

			usuariosJsLista = JSON.parse(localStorage.getItem('usuariosLS')) || []

			usuariosJsLista.push(conjuntoInformacoes)
			localStorage.setItem('usuariosLS', JSON.stringify(usuariosJsLista))
			let nomeTemporario = nomeJs
			limpaCadastro()
			selectJsPerifericosFunction()
			alert(`Bem vindo ${nomeTemporario}!`)
		}
		function limpaCadastro(){
			document.getElementById('nomeHtmlCadastro').value = ''
			document.getElementById('emailHtmlCadastro').value = ''
			document.getElementById('telefoneHtmlCadastro').value = ''
			document.getElementById('senhaHtmlCadastro').value = ''
			document.getElementById('senhaRepetidaHtmlCadastro').value = ''
		}