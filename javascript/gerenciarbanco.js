//chrome://settings/cookies
//C:\Users\MSI\AppData\Local\Google\Chrome\User Data\Default\databases

function gerenciarbanco_criarTabelaCliente(){
	var db = openDatabase('fabguardachuva1', '1.0', 'Automacao', 2 * 1024 * 1024);
	db.transaction(function (tx) {
		tx.executeSql('CREATE TABLE IF NOT EXISTS CLIENTE (tipo_pessoa,cnpj_cpf,nome_razaosocial,email,sexo,data_nascimento,estadocivil,pCep,pEndereco,pNumero,pComp,pCidade,pEstado,pTelefone,pCelular,cCep,cEndereco,cNumero,cComp,cCidade,cEstado,cTelefone,cCelular)');
	 });
}
function gerenciarbanco_deletarTabelaCliente(){
	var db = openDatabase('fabguardachuva1', '1.0', 'Automacao', 2 * 1024 * 1024);
	db.transaction(function (tx) {
		tx.executeSql("DROP TABLE IF EXISTS CLIENTE");
	 });
}
function gerenciarbanco_criarTabelaUsuario(){
	var db = openDatabase('fabguardachuva1', '1.0', 'Automacao', 2 * 1024 * 1024);
	db.transaction(function (tx) {
		tx.executeSql("CREATE TABLE IF NOT EXISTS USUARIO (id unique, login, senha)");
	 });
}
function gerenciarbanco_deletarTabelaUsuario(){
	var db = openDatabase('fabguardachuva1', '1.0', 'Automacao', 2 * 1024 * 1024);
	db.transaction(function (tx) {
		tx.executeSql("DROP TABLE IF EXISTS USUARIO");
	 });
}
function gerenciarbanco_popularTabelaUsuario(){
	var db = openDatabase('fabguardachuva1', '1.0', 'Automacao', 2 * 1024 * 1024);
	db.transaction(function (tx) {
		tx.executeSql("INSERT INTO USUARIO (id, login, senha) VALUES(1,'john','john')");
		tx.executeSql("INSERT INTO USUARIO (id, login, senha) VALUES(2,'paul','paul')");
		tx.executeSql("INSERT INTO USUARIO (id, login, senha) VALUES(3,'auto','auto')");
	 });
}

function configurar_bancodedados(){
	gerenciarbanco_deletarTabelaCliente();
	gerenciarbanco_deletarTabelaUsuario();
	gerenciarbanco_criarTabelaUsuario();
	gerenciarbanco_criarTabelaCliente();
	gerenciarbanco_popularTabelaUsuario();
	
	document.getElementById('mensagem').innerHTML = "Configuração efetuada com sucesso";
}
