function ativarForm(){
    validar();
};

function validar() {
    var feedback, input;

    if(event.srcElement.name != 'forms') {
        var form = document.getElementsByName('forms')[0];
        input = event.srcElement;

        input.onkeyup = function(){
            input.value = mascaras(input);
        };
        if(event.srcElement.name == 'button') {
            form.onmousemove = function () {
                validarClick(form);
            }
        }
    }
}

function validarClick(form) {
    var tamanho = form.getElementsByClassName("feedbackValidacao").length;
    var feedback, input, contador = 0;

    for(i = 0 ; i < tamanho; i++) {
        input = form.getElementsByClassName("feedbackValidacao")[i].children[0];
        feedback = form.getElementsByClassName("feedbackValidacao")[i].children[1];

        if(input.required) {
            validacoesConfig(input, feedback, true, '');
            if (input.value == null || input.value == '' || input.value.length == 0) {
                validacoesConfig(input, feedback, false, 'Preencha este campo');
            }else {
                if (input.maxLength > input.value.length) {
                    validacoesConfig(input, feedback, false, 'Preencha corretamente este campo');
                }
                if (!mascaraEmail(input.value) && input.name == 'email') {
                    validacoesConfig(input, feedback, false, 'Email Invalido');
                }
            }
        }else{
            validacoesConfig(input, feedback, true, '');
        }
        if(input.className == 'form-control'){
            contador++;
        }
    }
    console.log(contador);
}

function validacoesConfig(input, feedback, bool, alerta){
    feedback.textContent = alerta;
    if(!bool){
        input.className = 'form-control is-invalid';
        feedback.className = 'invalid-feedback';
    }else{
        input.className = 'form-control';
        feedback.className = 'valid-feedback';
    }
}

//Mascaras
function mascaras(input) {
    if(input.name == 'nome'){
        return mascaraNome(input.value);
    }
    if(input.name == 'email'){
        return input.value;
    }
    if(input.name == 'telefone' || input.name == 'ramal'){
        return mascaraTel(input.value);
    }
    if(input.name == 'matricula'){
        return mascaraMat(input.value);
    }
    if(input.name == 'unidade'){
        return mascaraUni(input.value);
    }
}

function mascaraTel(v){
    v=v.replace(/\D/g,"", " ");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    if(v.length > 15){
        v = v.substring(0, 14);
    }
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos

    return v;
}

function mascaraNome(v){
    v = v.replace(/[^A-Za-z ]/g,"");    //Remove todos caracteres que não sejam letras ou espaços
    return v;
}

function mascaraUni(v){
    v = v.replace(/[^A-Za-z0-9]/g,"");
    return v;
}

function mascaraEmail(v){
    var emailBr, emailCom;
    emailBr = /^[a-z0-9._-]+@[a-z]+.[a-z]+.br/ig;
    emailCom = /^[a-z0-9._-]+@[a-z]+.[a-z]/ig;
    if(!emailBr.test(v) && !emailCom.test(v)){
        return false;
    }
    return true;
}

function mascaraMat(v){
    var a = v.substring(0, 1).replace(/[^cef]/g, "");
    if(a == ''){
        v = '';
    }
    var b =  v.substring(0, v.length).replace(/[^0-9]/g,"");

    return a+b;
}
