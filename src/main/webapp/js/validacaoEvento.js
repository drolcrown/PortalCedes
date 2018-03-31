window.onload = function(){
	validar(document.getElementsByName("forms")[0]);
};

function validar(form) {
    var feedback, input, valor, bool;
    
    feedback = form.getElementsByClassName("feedbackValidacao")[2].children[1];
    
    inputNome = document.getElementsByName("nome")[0];
	inputEmail = document.getElementsByName("email")[0];
	inputTel = document.getElementsByName("telefone")[0];
	inputRamal = document.getElementsByName("ramal")[0];
	inputMat = document.getElementsByName("matricula")[0];

	inputNome.onkeyup = function(){
		inputNome.value = mascaraNome(inputNome.value);    
	}
	inputEmail.onkeyup = function(){
		if(inputEmail.value == ''){
			inputEmail.className = 'form-control';
		}else{
			if(mascaraEmail(inputEmail.value) == ''){
	         	validacoesConfig(inputEmail, feedback, false, 'Email Invalido');	
			}else{
	         	validacoesConfig(inputEmail, feedback, true, '');
			}
		}
	}
	inputMat.onkeyup = function(){
		inputMat.value = mascaraMat(inputMat.value);    
	}
	inputTel.onkeyup = function(){
		inputTel.value = mascaraTel(inputTel.value);    
	}
	inputRamal.onkeyup = function(){
		inputRamal.value = mascaraTel(inputRamal.value);    
	}
//               	bool = true;
//         		mascara( this, mascaraTel);
//               	validacoesConfig(input, feedback, true, '');
//         	}
//         	if(!bool){
//                 bool = false;
// 	        	alerta = 'Telefone Invalido';
// 	          	validacoesConfig(input, feedback, bool, alerta);
// 	        }
//         }
        
//         // validar ramal
//         if (input.name == "ramal") {
// 		    var alerta, valor = input.value;
// 		    if(valor  == null || valor == ''){
// 	        	alerta = 'Ramal Invalido';
//             	bool = false;
// 		    }
// 		    else if(isNaN(valor)){
//             	bool = true;
//             	alerta = '';
// 		    }
//           	validacoesConfig(input, feedback, bool, alerta);
//         }
    // }
}

//mascara
 function mascaraTel(v){
   v=v.replace(/\D/g,"", " ");             //Remove tudo o que não é dígito
   v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
   v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
   return v;
 }

function mascaraNome(v){
 	v = v.replace(/[^A-Za-z ]/g,"");    //Remove todos caracteres que não sejam letras ou espaços
    
	return v;
}
 

function mascaraEmail(v){
	var emailBr, emailCom;
 	emailBr = /^[a-z0-9._-]+@[a-z]+.[a-z]+.br/ig;
 	emailCom = /^[a-z0-9._-]+@[a-z]+.[a-z]/ig;
    if(!emailBr.test(v) && !emailCom.test(v)){
    	v = '';
	}
	return v;
}

function mascaraMat(v){
 	var a = v.substring(0, 1).replace(/[^cef]/g, "");
	if(a == ''){
		v = '';
	}
 	var b =  v.substring(0, v.length).replace(/[^0-9]/g,"");
    
	return a+b;
}

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