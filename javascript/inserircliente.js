/*
avança para a página inserircliente_endereco.html
*/
function inserircliente_Avancar(){
	if(inserircliente_validarPreenchimentoCampos()){
		//guarda as informações da página
		inserircliente_ArmazenarLocalStorages();
		//avança
		location.href="\inserircliente_endereco.html";
	}
}

/*
volta para a página inserircliente_identificacao.html
*/
function inserircliente_Voltar(){
	//guarda as informações da página
	inserircliente_ArmazenarLocalStorages();
	//volta
	location.href="\inserircliente_identificacao.html";
}

/*
Salva um cliente na base de dados
*/
function inserircliente_Salvar(){
	if(inserircliente_validarPreenchimentoCampos()){
		inserircliente_ArmazenarLocalStorages();
		db_inserirCliente();
		db_buscarIdClienteInserido();
		//TODO: timer aleatório para mostrar mensagem de sucesso
		inserircliente_DesabilitarCampos();
	}
}

function inserircliente_DesabilitarCampos(){
	frm = document.getElementById("form_principal");
	if (frm){
		cont = 0;
		while (cont < frm.length){
			frm[cont].disabled = true;				
			cont++;
		}
	}	
}

function inserircliente_radioClick(radio){
	if(radio.value=="fisica"){
		document.getElementById("data_nascimento").style.display = "inline";
		document.getElementById("sexo").style.display = "inline";
		document.getElementById("estado_civil").style.display = "inline";
		document.getElementById("lbldata_nascimento").style.display = "inline";
		document.getElementById("lblsexo").style.display = "inline";
		document.getElementById("lblestado_civil").style.display = "inline";
	}
	else{		
		document.getElementById("data_nascimento").style.display = "none";
		document.getElementById("sexo").style.display = "none";
		document.getElementById("estado_civil").style.display = "none";
		document.getElementById("lbldata_nascimento").style.display = "none";
		document.getElementById("lblsexo").style.display = "none";
		document.getElementById("lblestado_civil").style.display = "none";
		
		document.getElementById("data_nascimento").value = "";		
		document.getElementById("sexo").value = "selecione";	
		document.getElementById("estado_civil").value = "selecione";	
	}
}

function inserircliente_VerificarTipoPessoa(){
	if(document.getElementById("fisica").checked){
		document.getElementById("data_nascimento").style.display = "inline";
		document.getElementById("sexo").style.display = "inline";
		document.getElementById("estado_civil").style.display = "inline";
		document.getElementById("lbldata_nascimento").style.display = "inline";
		document.getElementById("lblsexo").style.display = "inline";
		document.getElementById("lblestado_civil").style.display = "inline";
	}
	else{		
		document.getElementById("data_nascimento").style.display = "none";
		document.getElementById("sexo").style.display = "none";
		document.getElementById("estado_civil").style.display = "none";
		document.getElementById("lbldata_nascimento").style.display = "none";
		document.getElementById("lblsexo").style.display = "none";
		document.getElementById("lblestado_civil").style.display = "none";
	}
}


/*
Utilizado ao avançar entre as páginas, para não perder as informações digitadas
*/
function inserircliente_ArmazenarLocalStorages(){
	
	//identificação
	localStorage.cpf_cnpj = (document.getElementById("cpf_cnpj") != null) ? document.getElementById("cpf_cnpj").value : ((localStorage.cpf_cnpj != null) ? localStorage.cpf_cnpj : "");
	localStorage.data_nascimento = (document.getElementById("data_nascimento") != null) ? document.getElementById("data_nascimento").value : ((localStorage.data_nascimento != null) ? localStorage.data_nascimento : "");
	localStorage.nome_razaosocial = (document.getElementById("nome_razaosocial") != null) ? document.getElementById("nome_razaosocial").value : ((localStorage.nome_razaosocial != null) ? localStorage.nome_razaosocial : "");	
	localStorage.tipoPessoa	= (document.getElementById("fisica") != null && document.getElementById("fisica").checked) ? "fisica" : ((localStorage.tipoPessoa == "fisica") ? "fisica" : localStorage.tipoPessoa);
	localStorage.tipoPessoa = (document.getElementById("juridica") != null && document.getElementById("juridica").checked) ? "juridica" : ((localStorage.tipoPessoa == "juridica") ? "juridica": localStorage.tipoPessoa);
	localStorage.estado_civil = (document.getElementById("estado_civil") != null) ? document.getElementById("estado_civil").value : ((localStorage.estado_civil != null) ? localStorage.estado_civil : "selecione");	
	localStorage.email = (document.getElementById("email") != null) ? document.getElementById("email").value : ((localStorage.email != null) ? localStorage.email : "");
	localStorage.sexo = (document.getElementById("sexo") != null) ? document.getElementById("sexo").value : ((localStorage.sexo != null) ? localStorage.sexo : "selecione");
	//endereço principal
	localStorage.pCep = (document.getElementById("endp_cep") != null) ? document.getElementById("endp_cep").value : ((localStorage.pCep != null) ? localStorage.pCep : "");	
	localStorage.pEndereco = (document.getElementById("endp_endereco") != null) ? document.getElementById("endp_endereco").value : ((localStorage.pEndereco != null) ? localStorage.pEndereco : "");	
	localStorage.pNumero = (document.getElementById("endp_numero") != null) ? document.getElementById("endp_numero").value : ((localStorage.pNumero != null) ? localStorage.pNumero : "");	
	localStorage.pComp = (document.getElementById("endp_complemento") != null) ? document.getElementById("endp_complemento").value : ((localStorage.pComp != null) ? localStorage.pComp : "");	
	localStorage.pCidade = (document.getElementById("endp_cidade") != null) ? document.getElementById("endp_cidade").value : ((localStorage.pCidade != null) ? localStorage.pCidade : "");	
	localStorage.pEstado = (document.getElementById("endp_estado") != null) ? document.getElementById("endp_estado").value : ((localStorage.pEstado != null) ? localStorage.pEstado : "selecione");	
	localStorage.pTelefone = (document.getElementById("endp_telefone") != null) ? document.getElementById("endp_telefone").value : ((localStorage.pTelefone != null) ? localStorage.pTelefone : "");	
	localStorage.pCelular = (document.getElementById("endp_celular") != null) ? document.getElementById("endp_celular").value : ((localStorage.pCelular != null) ? localStorage.pCelular : "");		
	//endereço de cobrança
	localStorage.cCep = (document.getElementById("endc_cep") != null) ? document.getElementById("endc_cep").value : ((localStorage.cCep != null) ? localStorage.cCep : "");	
	localStorage.cEndereco = (document.getElementById("endc_endereco") != null) ? document.getElementById("endc_endereco").value : ((localStorage.cEndereco != null) ? localStorage.cEndereco : "");	
	localStorage.cNumero = (document.getElementById("endc_numero") != null) ? document.getElementById("endc_numero").value : ((localStorage.cNumero != null) ? localStorage.cNumero : "");	
	localStorage.cComp = (document.getElementById("endc_complemento") != null) ? document.getElementById("endc_complemento").value : ((localStorage.cComp != null) ? localStorage.cComp : "");	
	localStorage.cCidade = (document.getElementById("endc_cidade") != null) ? document.getElementById("endc_cidade").value : ((localStorage.cCidade != null) ? localStorage.cCidade : "");	
	localStorage.cEstado = (document.getElementById("endc_estado") != null) ? document.getElementById("endc_estado").value : ((localStorage.cEstado != null) ? localStorage.cEstado : "selecione");	
	localStorage.cTelefone = (document.getElementById("endc_telefone") != null) ? document.getElementById("endc_telefone").value : ((localStorage.cTelefone != null) ? localStorage.cTelefone : "");
	localStorage.cCelular = (document.getElementById("endc_celular") != null) ? document.getElementById("endc_celular").value : ((localStorage.cCelular != null) ? localStorage.cCelular : "");	
}

/*
Carrega na página os valores contidos em localStorages relacionadas a um cliente
*/
function inserircliente_CarregarLocalStorages(){
	//----------------------------------------------------------------------------------------
	if (document.getElementById("cpf_cnpj") != null){
		document.getElementById("cpf_cnpj").value = (localStorage.cpf_cnpj != null) ? localStorage.cpf_cnpj : "";
	}
	if (document.getElementById("data_nascimento") != null){
		document.getElementById("data_nascimento").value = (localStorage.data_nascimento != null) ? localStorage.data_nascimento : "";
	}
	if (document.getElementById("nome_razaosocial") != null){
		document.getElementById("nome_razaosocial").value = (localStorage.nome_razaosocial != null) ? localStorage.nome_razaosocial : "";	
	}		
	if (document.getElementById("fisica") != null && localStorage.tipoPessoa == "fisica"){
		document.getElementById("fisica").checked = true;		
	}
	if (document.getElementById("juridica") != null && localStorage.tipoPessoa == "juridica"){
		document.getElementById("juridica").checked = true;
	}	
	if (document.getElementById("estado_civil") != null){
		document.getElementById("estado_civil").value = (localStorage.estado_civil != null) ? localStorage.estado_civil : "selecione";
	}
	if (document.getElementById("email") != null){
		document.getElementById("email").value = (localStorage.email != null) ? localStorage.email : "";
	}
	if (document.getElementById("sexo") != null){
		document.getElementById("sexo").value = (localStorage.sexo != null) ? localStorage.sexo : "selecione";
	}
	
	//----------------------------------------------------------------------------------------	
	if (document.getElementById("endp_cep") != null){
		document.getElementById("endp_cep").value = (localStorage.pCep != null) ? localStorage.pCep : "";
	}
	if (document.getElementById("endp_endereco") != null){
		document.getElementById("endp_endereco").value = (localStorage.pEndereco != null) ? localStorage.pEndereco : "";
	}
	if (document.getElementById("endp_numero") != null){
		document.getElementById("endp_numero").value = (localStorage.pNumero != null) ? localStorage.pNumero : "";
	}
	if (document.getElementById("endp_complemento") != null){
		document.getElementById("endp_complemento").value = (localStorage.pComp != null) ? localStorage.pComp : "";
	}
	if (document.getElementById("endp_cidade") != null){
		document.getElementById("endp_cidade").value = (localStorage.pCidade != null) ? localStorage.pCidade : "";
	}
	if (document.getElementById("endp_estado") != null){
		document.getElementById("endp_estado").value = (localStorage.pEstado != null) ? localStorage.pEstado : "selecione";
	}	
	if (document.getElementById("endp_telefone") != null){
		document.getElementById("endp_telefone").value = (localStorage.pTelefone != null) ? localStorage.pTelefone : "";
	}
	if (document.getElementById("endp_celular") != null){
		document.getElementById("endp_celular").value = (localStorage.pCelular != null) ? localStorage.pCelular : "";
	}	
	//----------------------------------------------------------------------------------------
	if (document.getElementById("endc_cep") != null){
		document.getElementById("endc_cep").value = (localStorage.cCep != null) ? localStorage.cCep : "";
	}
	if (document.getElementById("endc_endereco") != null){
		document.getElementById("endc_endereco").value = (localStorage.cEndereco != null) ? localStorage.cEndereco : "";
	}
	if (document.getElementById("endc_numero") != null){
		document.getElementById("endc_numero").value = (localStorage.cNumero != null) ? localStorage.cNumero : "";
	}
	if (document.getElementById("endc_complemento") != null){
		document.getElementById("endc_complemento").value = (localStorage.cComp != null) ? localStorage.cComp : "";
	}
	if (document.getElementById("endc_cidade") != null){
		document.getElementById("endc_cidade").value = (localStorage.cCidade != null) ? localStorage.cCidade : "";
	}
	if (document.getElementById("endc_estado") != null){
		document.getElementById("endc_estado").value = (localStorage.cEstado != null) ? localStorage.cEstado : "selecione";
	}
	if (document.getElementById("endc_telefone") != null){
		document.getElementById("endc_telefone").value = (localStorage.cTelefone != null) ? localStorage.cTelefone : "";
	}
	if (document.getElementById("endc_celular") != null){
		document.getElementById("endc_celular").value = (localStorage.cCelular != null) ? localStorage.cCelular : "";
	}
}

/*
Limpa todos os locaStorage relacionados a um cliente
*/
function inserircliente_limparLocalStorage(){
		
	localStorage.removeItem("cpf_cnpj");
	localStorage.removeItem("data_nascimento");
	localStorage.removeItem("nome_razaosocial");
	localStorage.removeItem("tipoPessoa");
	localStorage.removeItem("estado_civil");
	localStorage.removeItem("email");
	localStorage.removeItem("sexo");
	
	localStorage.removeItem("pCep");
	localStorage.removeItem("pEndereco");
	localStorage.removeItem("pNumero");
	localStorage.removeItem("pComp");
	localStorage.removeItem("pCidade");
	localStorage.removeItem("pEstado");	
	localStorage.removeItem("pTelefone");
	localStorage.removeItem("pCelular");
	
	localStorage.removeItem("cCep");
	localStorage.removeItem("cEndereco");
	localStorage.removeItem("cNumero");
	localStorage.removeItem("cComp");
	localStorage.removeItem("cCidade");
	localStorage.removeItem("cEstado");
	localStorage.removeItem("cTelefone");
	localStorage.removeItem("cCelular");
}

function inserircliente_desabilitarVoltarSalvar(){
	document.getElementById("salvar").disabled = true;
	document.getElementById("voltar").disabled = true;
}

function inserircliente_validarPreenchimentoCampos(){
	var campos = "";
	//----------------------------------------------------------------------------------------
	if (document.getElementById("fisica") != null && document.getElementById("juridica") != null && document.getElementById("fisica").checked == false &&  document.getElementById("juridica").checked == false){
		campos += "Tipo de Pessoa \n";
	}
	if (document.getElementById("cpf_cnpj") != null && document.getElementById("cpf_cnpj").value.trim() == ""){
		campos += "CPF/\CNPJ \n";
	}	
	if (document.getElementById("nome_razaosocial") != null && document.getElementById("nome_razaosocial").value.trim() == ""){
		campos += "Nome/\Razão Social \n";
	}
	if (document.getElementById("email") != null && document.getElementById("email").value.trim() == ""){
		campos += "Email \n";
	}		
	//se for pessoa física, deve preencher data de nascimento, sexo e estado civil
	if(document.getElementById("fisica") != null && document.getElementById("fisica").checked == true){
		if (document.getElementById("data_nascimento") != null && document.getElementById("data_nascimento").value.trim() == ""){
			campos += "Data de Nascimento \n";
		}
		if (document.getElementById("sexo") != null && document.getElementById("sexo").value == "selecione"){
			campos += "Sexo \n";
		}
		if (document.getElementById("estado_civil") != null && document.getElementById("estado_civil").value == "selecione"){
			campos += "Estado Civil \n";
		}
	}	
	//----------------------------------------------------------------------------------------	
	if (document.getElementById("endp_cep") != null && document.getElementById("endp_cep").value.trim() == ""){
		campos += "CEP Principal \n";
	}
	if (document.getElementById("endp_endereco") != null && document.getElementById("endp_endereco").value.trim() == ""){
		campos += "Endereço Principal \n";
	}
	if (document.getElementById("endp_numero") != null && document.getElementById("endp_numero").value.trim() == ""){
		campos += "Número Principal \n";
	}
	if (document.getElementById("endp_complemento") != null && document.getElementById("endp_complemento").value.trim() == ""){
		campos += "Complemento Principal \n";
	}
	if (document.getElementById("endp_cidade") != null && document.getElementById("endp_cidade").value.trim() == ""){
		campos += "Cidade Principal \n";
	}
	if (document.getElementById("endp_estado") != null && document.getElementById("endp_estado").value == "selecione"){
		campos += "Estado Principal \n";
	}
	if (document.getElementById("endp_telefone") != null && document.getElementById("endp_telefone").value.trim() == ""){
		campos += "Telefone Principal \n";
	}
	
	//----------------------------------------------------------------------------------------
	if (document.getElementById("endc_cep") != null && document.getElementById("endc_cep").value.trim() == ""){
		campos += "CEP Comercial \n";
	}
	if (document.getElementById("endc_endereco") != null && document.getElementById("endc_endereco").value.trim() == ""){
		campos += "Endereço Comercial \n";
	}
	if (document.getElementById("endc_numero") != null && document.getElementById("endc_numero").value.trim() == ""){
		campos += "Número Comercial \n";
	}
	if (document.getElementById("endc_complemento") != null && document.getElementById("endc_complemento").value.trim() == ""){
		campos += "Complemento Comercial \n";
	}
	if (document.getElementById("endc_cidade") != null && document.getElementById("endc_cidade").value.trim() == ""){
		campos += "Cidade Comercial \n";
	}
	if (document.getElementById("endc_estado") != null && document.getElementById("endc_estado").value == "selecione"){
		campos += "Estado Comercial \n";
	}
	if (document.getElementById("endc_telefone") != null && document.getElementById("endc_telefone").value.trim() == ""){
		campos += "Telefone Comercial \n";
	}
	
	if(!campos == ""){
		window.alert("Campo obrigatório não preenchido:\n" + campos);
		return false;
	}else{
		return true;
	}
}

/*
Busca o ID do último cliente inserido (max id)
*/
function inserircliente_BuscarIdClienteInserido(){
	db_buscarIdClienteInserido();
}

function db_inserirCliente(){
	var db = openDatabase('fabguardachuva1', '1.0', 'Automacao', 2 * 1024 * 1024);
	db.transaction(function (tx) {
		tx.executeSql("INSERT INTO CLIENTE (tipo_pessoa,cnpj_cpf,nome_razaosocial,email,sexo,data_nascimento,estadocivil,pCep,pEndereco,pNumero,pComp,pCidade,pEstado,pTelefone,pCelular,cCep,cEndereco,cNumero,cComp,cCidade,cEstado,cTelefone,cCelular) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
							[localStorage.tipoPessoa,localStorage.cpf_cnpj,localStorage.nome_razaosocial,localStorage.email,localStorage.sexo,localStorage.data_nascimento,localStorage.estado_civil,
							localStorage.pCep,localStorage.pEndereco,localStorage.pNumero,localStorage.pComp,localStorage.pCidade,localStorage.pEstado,localStorage.pTelefone,localStorage.pCelular,localStorage.cCep,localStorage.cEndereco,
							localStorage.cNumero,localStorage.cComp,localStorage.cCidade,localStorage.cEstado,localStorage.cTelefone,localStorage.cCelular]);
					
		//limpa todos os localStorage relacionados a um cliente
		inserircliente_limparLocalStorage();
		//desabilita botoes de voltar e salvar
		inserircliente_desabilitarVoltarSalvar();
	 });
}



function db_buscarClienteInserido(id){
	
}

function db_buscarIdClienteInserido(){
	var db = openDatabase('fabguardachuva1', '1.0', 'Automacao', 2 * 1024 * 1024);
	db.transaction(function (tx) {
		tx.executeSql("SELECT MAX(rowid) maximo FROM CLIENTE",[], resultado_buscarIdCliente);
	 });
}

function resultado_buscarIdCliente(transaction, results){
	 var idInserido;
	//Iterate through the results
	for (i = 0; i < results.rows.length; i++) {
		//Get the current row
		var row = results.rows.item(i);
		idInserido = row.maximo;
	}
	if (idInserido != null){
		document.getElementById('mensagem').innerHTML = 'Cliente cadastrado com sucesso, ' + idInserido + '!';
	}else{
		document.getElementById('mensagem').innerHTML = 'Ocorreu um erro ao tentar salvar o cliente!';
	}
}


function db_buscarCliente(){
	var db = openDatabase('fabguardachuva1', '1.0', 'Automacao', 2 * 1024 * 1024);
	db.transaction(function (tx) {
		tx.executeSql("SELECT rowid, * FROM CLIENTE WHERE rowid = ?",[3],resultado_buscarCliente);
	 });
}

function resultado_buscarCliente(transaction, results){
	 var i;
	//Iterate through the results
	for (i = 0; i < results.rows.length; i++) {
		//Get the current row
		var row = results.rows.item(i);
		tipoPessoa = row.tipo_pessoa;
	}
}