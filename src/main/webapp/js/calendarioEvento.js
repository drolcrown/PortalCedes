var placeAtiv = false;
var eventos = [];
var cont = 0;
var data = new Date();
var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
    'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

var divsCarousel =
    "<button type='button' class='btn btn-outline-light' style='border: hidden; background: transparent'"+
    "data-toggle='modal' data-target='#modalEventos' onclick='detalheModal(procurarElementoID(event.srcElement))'>" +
    "<div id='cartao' class='cartao'>" +
    "<img src='img/about-plan.jpg' class='imagemEventoCartao img-fluid mb-2'>" +
    "<h5 class='nomeEventoCartao col-12 text-center'></h5>" +
    "<div class='infEvento container row text-center'><div class='miniCalendario'><div class='mesCalendario'></div>" +
    "<div class='textoCalendario'></div></div>" +
    "<div class='col-9 textoCalendario'><img src='img/iconEvento/clock.svg' class='iconeEvento img-fluid'>" +
    "<small></small><br><img src='img/iconEvento/map-location.svg' class='iconeEvento img-fluid'>" +
    "<small></small></div></div></div></div></button>";

var eventoString =
    "<button type='button' class='btn btn-secondary' style='border: hidden; background: transparent;'"+
    "data-toggle='modal' data-target='#modalEventos' onclick='detalheModal(procurarElementoID(event.srcElement))'>" +
    "<div id='cartaoPassado' class='cartaoPassado'>" +
    "<img src='img/about-plan.jpg' class='imagemEventoCartao img-fluid'>" +
    "<h5 class='nomeEventoCartao col-12 text-center'></h5>" +
    "<div class='infEvento container row text-center'><div class='miniCalendario'><div class='mesCalendario'></div>" +
    "<div class='textoCalendario'></div></div>" +
    "<div class='col-9 textoCalendario'><img src='img/iconEvento/clock.svg' class='iconeEvento img-fluid'>" +
    "<small></small><br><img src='img/iconEvento/map-location.svg' class='iconeEvento img-fluid'>" +
    "<small></small></div></div></div></div></button><hr>";

function mostrarDivCheckbox(nomeDiv) {
    var listaInputs = nomeDiv.parentNode.getElementsByTagName("input");
    var button = document.getElementById("buttonPesquisa");
    var divOcutada = document.getElementById(nomeDiv.name);
    divOcutada.hidden = !nomeDiv.checked;

    if(nomeDiv.name === "dataCheckbox" && nomeDiv.checked){
        adicionarPlaceholders();
        mostraCalendario();
    }

    button.hidden = true;
    for (i = 0; i < listaInputs.length; i++) {
        if (listaInputs[i].checked) {
            button.hidden = false;
            break;
        }
    }
}

function acionaEventos() {
    if (!placeAtiv) {
        adicionarPlaceholders()
    }
    mostraCalendario()
}

function adicionarPlaceholders() {
    var dia = data.getDate(),
        mes = data.getMonth() + 1

    if (data.getDate() < 10) {
        dia = '0' + dia
    }
    if (data.getMonth() < 10) {
        mes = '0' + mes
    }
    $('#dataInicio')[0].placeholder =
        dia + '/' + mes + '/' + data.getFullYear()
    $("#dataFim")[0].placeholder = '31/12/' + data.getFullYear()
    placeAtiv = true
}

function mostraCalendario() {
    $('#dataInicio').datepicker({
        format: 'dd/mm/yyyy',
        language: 'pt-BR',
        startDate: '-1000d'
    });
    $('#dataFim').datepicker({
        format: 'dd/mm/yyyy',
        language: 'pt-BR',
        startDate: '-1000d'
    });
}

function mostrarEventos(eventosPassados, eventosAtuais, eventos) {
    var evento = $("#carousel")[0];
    var prev = $("#prev")[0];
    var next = $("#next")[0];
    var numEvento = $("#numEventos")[0];
    
    numEvento.textContent = 'Numero de eventos encontrados: ' + eventos.length
    if (eventoAtuais.length == 0) {
        evento.innerHTML = "<div id='semEvento'> <h1>Nao Existem Eventos</h1> </div>"
        prev.style.display = 'none'
        next.style.display = 'none'
    }
    if (eventoAtuais.length == 1) {
        evento.removeChild(document.getElementById('semEvento'))
    }
    if (eventoAtuais.length > 1) {
        prev.style.display = '';
        next.style.display = '';
        for(i=0; i<eventos.length; i++){
            adicionarEventos(eventos[i]);
        }
    }
}

function alterarImagem() {
    var img = document.getElementById("inputPerfil");
    
    img.src = "img/eaes"
}

function carregarEventos(eventosBD) {
	var eventosPassados = [], eventosAtuais = [];
	
    for(i=0; i<eventosBD.length; i++){
        eventosBD.ativo = verificarData(eventosBD.dataInicio);
        if(eventosBD.ativo){
        	eventosAtuais.push(eventosBD[i]);
        }else{
        	eventosPassados.push(eventosBD[i]);
        }
    }
    mostrarEventos(eventosPassados, eventosAtuais, eventosBD);
}

function adicionarEventos(eventoBD) {
	var contPass = 1,
    contAtual = 1;
    var cartaoId, evento;

    if (eventoBD.Ativo) {
        evento = document.getElementById('carousel')
        var carouselItem = document.createElement('div')
        carouselItem.id = 'parente' + eventoBD.id;
        if (evento.children.length === 0) {
            carouselItem.className = 'carousel-item active'
        } else {
            carouselItem.className = 'carousel-item'
        }
        // Criando o objeto dentro do carrousel
        evento.appendChild(carouselItem)
        carouselItem.innerHTML = divsCarousel

        cartaoId = document.getElementById('cartao')
        cartaoId.id = cartaoId.id + eventoBD.id;

        contAtual++
        document.getElementById(cartaoId.id).children[0].style.height = 300 + "px";
    } else {
        evento = document.getElementById('eventosPassados')
        var secao = document.createElement('div')
        secao.id = 'parente' + contPass;

        evento.appendChild(secao)
        secao.innerHTML = eventoString

        // Atribuir id pra cada cartao e procurar os elementos filhos 
        cartaoId = document.getElementById('cartaoPassado')
        cartaoId.id = cartaoId.id + contPass
        contPass++
        document.getElementById(cartaoId.id).children[0].style.height = 150 + "px";
    }
    popularEvento(document.getElementById(cartaoId.id), eventoBD);
}

function popularEvento(cartaoEncontrado, eventoBD) {
    var horaEvento = cartaoEncontrado.children[2].children[1].children[1];
    var localEvento = cartaoEncontrado.children[2].children[1].children[4];
    var mesEvento = cartaoEncontrado.children[2].children[0].children[0];
    var diaEvento = cartaoEncontrado.children[2].children[0].children[1];
    var img = cartaoEncontrado.children[0];
    var nome = cartaoEncontrado.children[1];

    img.src = eventoBD.imagem;
    mesEvento.textContent = meses[desmembrarData(eventoBD.dataInicio, 1)].substring(0, 3);
    diaEvento.textContent = desmembrarData(eventoBD.dataInicio, 0);
    nome.textContent = eventoBD.nome;
    localEvento.textContent = eventoBD.local;
    horaEvento.textContent = eventoBD.hora;
}

function verificarData(dataEnviada) {
    var dia = desmembrarData(dataEnviada, 0)
    var mes = desmembrarData(dataEnviada, 1)
    var ano = desmembrarData(dataEnviada, 2)
    if (ano >= data.getFullYear()) {
        if (ano == data.getFullYear()) {
            if (mes > data.getMonth()) {
                return true
            }
            if (mes == data.getMonth()) {
                if (dia >= data.getDate()) {
                    return true
                }
            }
        } else {
            return true
        }
    }
    return false
}

function detalheModal(objeto) {
    var modal = document.getElementById('modalEventos')
    var data = modal.children[0].children[0].children[0].children[0]
    var titulo = modal.children[0].children[0].children[0].children[1]
    var descricao = modal.children[0].children[0].children[1]
    var modalC = modal.children[0].children[0]

    var tam = document.documentElement.clientWidth * 0.8;
    //
    // modalC.style.left = "-50%"
    //
    //
    // // modalC.style.marginLeft = -tam + "px";
    // // modalC.style.marginRight = (20) +"%";
    // modalC.style.minWidth = "300";
    // modalC.style.minHeight= "600";
    // modalC.style.width = "200%"
    // modalC.style.background = 'url(img/about-mission.jpg)';

    data.textContent = objeto.children[2].children[0].children[1].textContent + " de " + objeto.children[2].children[0].children[0].textContent
    data.style.marginRight = "5%";
    titulo.textContent = objeto.children[1].textContent
    descricao.textContent = "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are" +
        " perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains" +
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are" +
        " perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
}

function dataPorExtenso(data) {
    var dia = desmembrarData(dataEnviada, 0)
    var mes = desmembrarData(dataEnviada, 1)
    var ano = desmembrarData(dataEnviada, 2)
    return dia + ' de ' + meses[mes] + ' de ' + ano
}

function desmembrarData(data, parte) {
    var dia = data.substring(0, 2)
    var mes = data.substring(3, 5) - 1
    var ano = data.substring(6, 10)

    if (parte === 0) {
        if (dia.substring(0, 1) === '0') {
            dia = dia.substring(1, 2)
        }
        return dia;
    }
    if (parte === 1) {
        return mes;
    }
    if (parte === 2) {
        return ano;
    }

    return data;
}

function pesquisarEventoBD(form) {
    var eventoPesq = $('#eventosPesq')[0];
    var secao = document.createElement('div');

    eventoPesq.appendChild(secao);
    secao.innerHTML = divsCarousel;
    // $.ajax({
    //     method: "GET",
    //     contentType: "json",
    //     url:"rest/eventos/buscar/" + percorreForms(form),
    //     data: {}
    // }).done(function (data) {
    //     for(i=0; i < data.length; i++){
    //         eventoPesq.appendChild(secao);
    //         secao.innerHTML = divsCarousel;
    //         popularEvento(secao, data[i]);
    //     }
    // });
}

function desmembrarJson(json) {
    var tupla, tupla2;
    var vetorTupla = [];
    var chave = true;
    for(i=0; i<json.length; i++){
        if(json[i] === '"'){
            tupla = "";
            tupla2 = "";
            while(json[i] !== '\n') {
                i++;
                if(json[i] === ':'){
                    chave = false;
                }
                if(json[i] !== '"' && json[i] !== ' ' && json[i] !== ':'
                    && json[i] !== ',' && json[i] !== '\n') {
                    if(chave) {
                        tupla += json[i];
                    }else{
                        tupla2 += json[i];
                    }
                }
            }
            vetorTupla.push({chave:tupla, valor:tupla2});
            chave = true;
        }
    }

    return vetorTupla;
}

function procurarElementoID(evento) {
	var parenteID = evento.parentElement.id.substring(0, 6);
	var parente = evento.parentElement;

	while (parenteID !== 'cartao') {
		if (parente.id.substring(0, 7) === 'parente') {
			parente = parente.children[0];
		} else {
			parente = parente.parentElement;
		}
		parenteID = parente.id.substring(0, 6);
	}
	return parente
}

function adicionarEventoBD(evento, endpoint) {
	$.ajax({
		method : "POST",
		contentType : "application/json",
		dataType : "application/json",
		url : "rest/"+ endpoint+ "/salvar",
		data : evento
	}).done(function(data) {
	    recuperarEventosBD();
	});
    alert('Seu Evento Foi Cadastrado');
    if(endpoint === 'eventos'){
    	window.close('adicionaEventoForm.html');
    }
}

function recuperarEventosBD() {
	$.ajax({
		method : "GET",
		contentType : "application/json",
		url : "rest/eventos/todos",
		data: data
	}).done(function(data) {
		carregarEventos(data);
	});
}

function teste(varl){
	console.log(varl)
}


function percorreForms(form, endpoint) {
    var inputs = form.getElementsByTagName("Input");

    var nomeVar, valorVar;
    var json = '{\n', tamanho = inputs.length;

    for(i = 0 ; i < tamanho; i++) {
        if(inputs[i].type !== "checkbox" && inputs[i].type !== "radio"
            && inputs[i].type !== "button" && inputs[i].type !== "submit"){
//        	if(inputs[i].type === "file"){
//        		console.log(inputs[i]);
//        	}
            nomeVar = inputs[i].name;
            valorVar = inputs[i].value;
            if(nomeVar === "email"){
	            if(endpoint === "usuarios"){
	            	enviarQRCODE(valorVar);
	            	console.log("ENTREI NO QR");
	            }
            }
            json += '"' + nomeVar.toString() + '": "' + valorVar.toString() + '",\n';
        }
    }
    json = json.substring(0, json.length-2) + "\n}";
    adicionarEventoBD(json, endpoint);
    return json;
}


function gerarQRCODE(){
    return new QRCode(document.getElementById('qrcode'),{
        text:'index.html',
        width: 300,
        height: 300,
        QRCodecorrectLevel: QRCode.correctLevel
    });
}

function enviarQRCODE(email){
    var link = "mailto:" + email
    + "?cc=" + email
    + "&Subject=" + escape("Descricao Evento")
    + "&body=" + escape(document.getElementById('emailTeste').textContent);
    
    document.getElementById('cadastroEvent').innerHTML = eventoString;
    
    // So Precisa gerar o qrcode na pagina de inscricao
        
    window.location.href = link;
    return false;
}