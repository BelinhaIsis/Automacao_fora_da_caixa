function util_data(){
	var currentTime = new Date();
	var month = currentTime.getMonth() + 1;
	var day = currentTime.getDate();
	var year = currentTime.getFullYear();
	var data = day + "/" + month + "/" + year;
	document.title = "A Fantastica Fabrica de Guarda-Chuvas - " + data;		
}

/************************************************************************Validações e máscaras CNPJ e CPF********************************************************************/


function util_ValidarCNPJ(cnpj) {
 
    cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj == '') 
		return false;
     
    if (cnpj.length != 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true;    
}

function util_ValidarCPF(cpf){
	cpf = cpf.replace(/[^\d]+/g,'');    
    if(cpf == '') return false; 
    // Elimina CPFs invalidos conhecidos    
    if (cpf.length != 11 || 
        cpf == "00000000000" || 
        cpf == "11111111111" || 
        cpf == "22222222222" || 
        cpf == "33333333333" || 
        cpf == "44444444444" || 
        cpf == "55555555555" || 
        cpf == "66666666666" || 
        cpf == "77777777777" || 
        cpf == "88888888888" || 
        cpf == "99999999999")
            return false;       
    // Valida 1o digito 
    add = 0;    
    for (i=0; i < 9; i ++)       
        add += parseInt(cpf.charAt(i)) * (10 - i);  
        rev = 11 - (add % 11);  
        if (rev == 10 || rev == 11)     
            rev = 0;    
        if (rev != parseInt(cpf.charAt(9)))     
            return false;       
    // Valida 2o digito 
    add = 0;    
    for (i = 0; i < 10; i ++)        
        add += parseInt(cpf.charAt(i)) * (11 - i);  
    rev = 11 - (add % 11);  
    if (rev == 10 || rev == 11) 
        rev = 0;    
    if (rev != parseInt(cpf.charAt(10)))
        return false;       
    return true;  
}

///--------------------------------------------------------------------------------------------------------------------------------------------

function util_ValidarDoc(obj,rad){
	obj.value = cpfCnpj(obj.value,rad);
	valor = obj.value;
	tipo = rad.value;
	
	if(valor != ""){
		//cnpj
		if(tipo == "juridica"){
			valido = util_ValidarCNPJ(valor);
			if(!valido){
				window.alert("CNPJ inválido");
				obj.value="";
				obj.focus();
			}
		//cpf
		}else if(tipo == "fisica"){
			valido = util_ValidarCPF(valor);
			if(!valido){
				window.alert("CPF inválido");
				obj.value="";
				obj.focus();
			}
		}else{
			window.alert("Selecione o tipo de pessoa antes!");
			obj.value="";
		}
	}
	clearTimeout();
}

function cpfCnpj(v,rad){
	 tipo = rad.value;
	 
    //Remove tudo o que não é dígito
    v=v.replace(/\D/g,"")
	if(tipo == "fisica"){
		if (v.length <= 14) { //CPF
	 
			//Coloca um ponto entre o terceiro e o quarto dígitos
			v=v.replace(/(\d{3})(\d)/,"$1.$2")
	 
			//Coloca um ponto entre o terceiro e o quarto dígitos
			//de novo (para o segundo bloco de números)
			v=v.replace(/(\d{3})(\d)/,"$1.$2")
	 
			//Coloca um hífen entre o terceiro e o quarto dígitos
			v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
		}
		if(v.length > 14) {
			v = v.substring(0,14);
		} 
	}else if (tipo == "juridica"){
		if (v.length <= 18) { //CNPJ
			//Coloca ponto entre o segundo e o terceiro dígitos
			v=v.replace(/^(\d{2})(\d)/,"$1.$2")
	 
			//Coloca ponto entre o quinto e o sexto dígitos
			v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
	 
			//Coloca uma barra entre o oitavo e o nono dígitos
			v=v.replace(/\.(\d{3})(\d)/,".$1/$2")
	 
			//Coloca um hífen depois do bloco de quatro dígitos
			v=v.replace(/(\d{4})(\d)/,"$1-$2")		
		}
		if(v.length > 18) {
			v = v.substring(0,18);
		} 
	} 
    return v;
}

function util_MascaraCpfCpnj(o,f,rad){
    v_obj=o;
    v_fun=f;
	v_radio = rad;
    setTimeout('execmascara()',1);
}

function execmascara(){
    v_obj.value=v_fun(v_obj.value,v_radio);
}

/*************************************************************************Máscara CEP, Telefone, Data***********************************************************************/

 function util_mascara(t, mask){
	 var i = t.value.length;
	 var saida = mask.substring(1,0);
	 var texto = mask.substring(i)
	 if (texto.substring(0,1) != saida){
		t.value += texto.substring(0,1);
	 }
 }

 /************************************************************************Validação Email**********************************************************************/
 
function util_validacaoEmail(field) {	
	if(field.value.trim() != ""){
		field.value = field.value.trim();
		usuario = field.value.substring(0, field.value.indexOf("@"));
		dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
		if ((usuario.length >=1) &&
			(dominio.length >=3) && 
			(usuario.search("@")==-1) && 
			(dominio.search("@")==-1) &&
			(usuario.search(" ")==-1) && 
			(dominio.search(" ")==-1) &&
			(dominio.search(".")!=-1) &&      
			(dominio.indexOf(".") >=1)&& 
			(dominio.lastIndexOf(".") < dominio.length - 1)) {
				//é válido, não faz nada.
		}
		else{
			alert("E-mail inválido!");
			field.value="";
			field.focus();
		}
	}
}
