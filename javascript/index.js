function index_validarUsuario(){
	login_informado = document.getElementById("login").value;
	senha_informada = document.getElementById("senha").value;
	//consulta base em busca do login/senha informados
	var db = openDatabase('fabguardachuva1', '1.0', 'Automacao', 2 * 1024 * 1024);
	db.transaction(function (tx) {
		tx.executeSql("SELECT * FROM USUARIO WHERE login=? AND senha=?", [login_informado,senha_informada], resultado_validarUsuario);
	});
}

function resultado_validarUsuario(transaction, results){
	resultado = (results.rows.length < 1) ? false : true;
	if (resultado){
		//limpa todos os localStorage
		localStorage.clear();
		
		//armazena o usuario em um localStorage
		localStorage.nome_login = document.getElementById("login").value;
		
		//avança para a página inicial, 
		location.href="\inicio.html";
	}else{
		document.getElementById("login").value = "";
		document.getElementById("senha").value = "";
		//document.getElementById("msgLogin").innerHTML = "Login ou senha inválidos! Verifique!";
		window.alert("Login e/ou Senha inválidos! Verifique!");
	}
}