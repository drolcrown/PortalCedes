function validar(form) {
    var tamanho = form.getElementsByClassName("feedbackValidacao").length;
    var feedback, input, valor, bool;
    var emailBr = /^[a-z0-9._-]+@[a-z]+.[a-z]+.br/ig, emailCom = /^[a-z0-9._-]+@[a-z]+.[a-z]/ig;
    
    for(i = 0 ; i < tamanho; i++) {
    	input = form.getElementsByClassName("feedbackValidacao")[i].children[0];
    	feedback = form.getElementsByClassName("feedbackValidacao")[i].children[1];
    	valor = input.value, bool = true;
        // validar nome
        if (input.name == "nome") {
        	var alerta;
            if (valor === null || valor.length == 0 || /^\s+$/.test(valor)) {
            	alerta = 'Digite um nome';
                bool = false;
            }
            else if (!isNaN(valor)) {
            	alert = 'Esse campo só aceita letras!';
            	bool = false;
            }
            else{
            	bool = true;
            	alerta = '';
            }
        	validacoesConfig(input, feedback, bool, alerta);
        }
        
        //validar matricula
        if (input.name == "matricula") {
		    var matr = valor.substring(1, valor.length);
		    var alerta;
		    if(valor[0]  !== 'c' && valor[0] !== 'e' && valor[0] !== 'f' || isNaN(matr)){
            	alerta = 'Matricula Invalida';
            	bool = false;
		    }else{
            	bool = true;
            	alerta = '';
	        }
        	validacoesConfig(input, feedback, bool, alerta);
	    }
	    
         //validar email
        if (input.name == "email") {
		    var alerta;
	        if (!emailBr.test(valor) && !emailCom.test(valor)){
            	alerta = 'Email Invalido';
            	bool = false;
	        }else{
            	alerta = '';
            	bool = true;
	        }
        	validacoesConfig(input, feedback, bool, alerta);
        }        
        
        //validar unidade
        if (input.name == "unidade") {
        	validacoesConfig(input, feedback, true, '');
        }
        
//        // validar data
//        if (nomeVar == "dataInicio" || nomeVar == "dataFim") {
//            var ano = document.getElementById("ano").value;
//            var mes = document.getElementById("mes").value;
//            var dia = document.getElementById("dia").value;
//
//            valor = new Date(ano, mes, dia);
//
//            if (!isNaN(valor)) {
//                return false;
//            }
//        }
//
        // validar telefone
        if (input.name == "telefone") {
		    var alerta;
        	if(input.value.length < 11){
            	bool = false;
        	}
        	input.onkeyup = function(){
              	bool = true;
        		mascara( this, mascaraTel);
              	validacoesConfig(input, feedback, true, '');
        	}
        	if(!bool){
                bool = false;
	        	alerta = 'Telefone Invalido';
	          	validacoesConfig(input, feedback, bool, alerta);
	        }
        }
        
        // validar ramal
        if (input.name == "ramal") {
		    var alerta, valor = input.value;
		    if(valor  == null || valor == ''){
	        	alerta = 'Ramal Invalido';
            	bool = false;
		    }
		    else if(isNaN(valor)){
            	bool = true;
            	alerta = '';
		    }
          	validacoesConfig(input, feedback, bool, alerta);
        }
    }
}

//mascara
  function mascara(o,f){
	  v_obj = o;
	  v_fun = f;
	   setTimeout("execmascara()",1)
  }
  
  function execmascara(){
    v_obj.value=v_fun(v_obj.value)
  }
  
 function mascaraTel(v){
   v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
   v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
   v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
   return v;
 }
// function mascaraRamal(valor){
//  valor = valor.replace(/\D/g,"");             //Remove tudo o que não é dígito
//  valor = valor.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
//  return valor;
//}
 
function validacoesConfig(input, feedback, bool, alerta){
	feedback.textContent = alerta;
	if(!bool){
		input.className = 'form-control is-invalid';
		feedback.className = 'invalid-feedback';
	}else{
		input.className = 'form-control is-valid';
		feedback.className = 'valid-feedback';
	}
}