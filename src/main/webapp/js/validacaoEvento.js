function ativarForm(){
    validar(null);
};

function validar(input) {
    if(input == null) {
        input = event.srcElement;
    }
    if(input.name != ' ' && input.name != null && event.srcElement.name != 'forms') {
        var form = document.getElementsByName('forms')[0];

        input.onkeyup = function(){
            input.value = mascaras(input);
        };
        form.onclick = function () {
            var input2 = event.srcElement;

            if(input2.name != ' ' && input2.name != null && input2.name != 'forms' &&
                input2.name != 'button' && input2.name != 'reset'){

                if (input2.name != input.name) {
                    if (input.value.length != 0) {
                        validarInput(input, input.parentElement.children[1]);
                    }if(input2.parentElement.children[1].textContent != ''){
                        validarInput(input2, input2.parentElement.children[1]);
                    }
                    validar(input2);
                }
            }
        }
    }
}

function validarInput(input, feedback){
    if(input.required) {
        validacoesConfig(input, feedback, true, '');
        var valor = mascaras(input);
        if (valor == null || valor == '' || valor.length == 0) {
            validacoesConfig(input, feedback, false, 'Preencha este campo');
        }else {
            if (input.maxLength > valor.length) {
                validacoesConfig(input, feedback, false, 'Preencha corretamente este campo');
            }
            if (!mascaraEmail(valor) && input.name == 'email') {
                validacoesConfig(input, feedback, false, 'Email Invalido');
            }
            if (input.maxLength == valor.length) {
                validacoesConfig(input, feedback, true, '');
            }
        }
    }else{
        validacoesConfig(input, feedback, true, '');
    }
}

function validarClick(form) {
    var tamanho = form.getElementsByClassName("feedbackValidacao").length;
    var feedback, input, contador = 0;

    for(i = 0 ; i < tamanho; i++) {
        input = form.getElementsByClassName("feedbackValidacao")[i].children[0];
        feedback = form.getElementsByClassName("feedbackValidacao")[i].children[1];

        validarInput(input, feedback);
        if(input.className == 'form-control'){
            contador++;
        }
    }
    if(contador == tamanho){
        return true;
    }
    return false;
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

function resetarForm(form){
    var tamanho = form.getElementsByClassName("feedbackValidacao").length;

    for(i = 0 ; i < tamanho; i++) {
        var input = form.getElementsByClassName("feedbackValidacao")[i].children[0];
        input.className = 'form-control';
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
    if(input.name == 'data'){
        return mascaraData(input.value);
    }
    if(input.name == 'hora'){
        return mascaraHora(input.value);
    }
    return mascaraNome(input.value);
}

function mascaraTel(v){
    v=v.replace(/\D/g,"", " ");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    if(v.length >= 15){
        v = v.substring(0, 14);
    }
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos

    return v;
}

function mascaraData(v){
    var dia, mes, ano;
    v=v.replace(/\D/g,"", " ");     //Remove todos caracteres que não sejam letras ou espaços
    dia = v.substring(0,2);
    mes = v.substring(2,4);
    ano = v.substring(4,v.length);
    if(dia > diaMeses[data.getMonth()]){
        dia = '01';
    }
    if(mes > 12){
        mes = acrescentarZero(data.getMonth()+1);
    }
    v = dia + "/" + mes + "/" + ano;
    if(v.length <= 2) {
        return '';
    }
    if(v.length > 10) {
        v = v.substring(0, 10);
    }
    return v;
}

function mascaraNome(v){
    v = v.replace(/[^A-Za-z ]/g,"");    //Remove todos caracteres que não sejam letras ou espaços
    return v;
}

function mascaraHora(v){
    v=v.replace(/\D/g,"", " ");
    var hora = v.substring(0,2);
    var min = v.substring(2,4);

    if(hora > 23 || hora < 0){
        hora = '';
    }
    if(min > 59 || min < 0){
        min = '00';
    }
    return hora + ":" + min;
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

function validarESalvar(bool, form, endpoint) {
    if(bool) {
        percorreForms(form, endpoint);
    }
}