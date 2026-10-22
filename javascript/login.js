function buttonJsLogin(){
    let divJsMostrar = `
				<div id="divHtml2"></div>
                <div class="divHtml2">
                    <button type="button" id="buttonHtmlLoginVoltar" onclick="buttonJsVoltar()">X</button>
					<h1 id="login-h1">Log in</h1>
					<h5 id="loginH5Email">Email</h5>
					<input type="text" id="emailHtmlLogin" placeholder="Digite seu email"><br>
					<h5 id="loginH5Senha">Senha</h5>
					<input type="password" id="senhaLoginInput" placeholder="Digite sua senha"><br>
					<button type="button" id="buttonHtmlLoginContinuar" onclick="verificarLogin()">Continuar</button>
				</div>
		`
        document.getElementById('divHtml').innerHTML = divJsMostrar

		divJsMostrar = ''
			document.getElementById('divHtmlItems').innerHTML = divJsMostrar
}
function verificarLogin(){
	let emailInputLogin = document.getElementById('emailHtmlLogin').value 
	let senhaInputLogin = document.getElementById('senhaLoginInput').value
	usuariosJsLista = JSON.parse(localStorage.getItem('usuariosLS')) || []
	for(let i = 0; i < usuariosJsLista.length; i++){
		if(usuariosJsLista[i].email == emailInputLogin && usuariosJsLista[i].senha == senhaInputLogin){
		logado = true
		alert(`Bem vindo ${usuariosJsLista[i].nome}!`)
		selectJsPerifericosFunction()
	} else {
		logado = false
	}
	}
	if(logado) {
		alert(`Olá ${usuariosJsLista[i].nome} bem vindo!`)
	} else if(emailInputLogin != 'adm' && senhaInputLogin != '123'){
		alert('Houve algum erro de digitação ou sua conta não foi cadastrada.')
	}
	if(emailInputLogin == 'adm' && senhaInputLogin == '123') {
		buttonJsAdministrador2()
	}
	document.getElementById('emailHtmlLogin').value = ''
	document.getElementById('senhaLoginInput').value = ''
}