var placeAtiv = false
var eventos = []
var cont = 0
var data = new Date()
var meses = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
		'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ]

function acionaEventos() {
	if (!placeAtiv) {
		adicionarPlaceholders()
	}
	mostraCalendario()
}

function adicionarPlaceholders() {
	var dia = data.getDate(), mes = data.getMonth() + 1

	if (data.getDate() < 10) {
		dia = '0' + dia
	}
	if (data.getMonth() < 10) {
		mes = '0' + mes
	}
	document.getElementById('dataInicio').placeholder = dia + '/' + mes + '/'
			+ data.getFullYear()
	document.getElementById('dataFim').placeholder = '31/12/'
			+ data.getFullYear()
	placeAtiv = true
}

function mostraCalendario() {
	$(document).ready(function() {
		$('#dataInicio').datepicker({
			format : 'dd/mm/yyyy',
			language : 'pt-BR',
			startDate : '-1000d'
		})
		$('#dataFim').datepicker({
			format : 'dd/mm/yyyy',
			language : 'pt-BR',
			startDate : '-1000d'
		})
	})
}

function mostrarEventos() {
	var evento = document.getElementById('carousel')
	var prev = document.getElementById('prev')
	var next = document.getElementById('next')
	var numEvento = document.getElementById('numEventos')
	criarEventos()
	criarEventos()
	criarEventos()
	criarEventos()

	numEvento.textContent = 'Numero de eventos encontrados: ' + eventos.length
	if (evento.length == 0) {
		evento.innerHTML = "<div id='semEvento'> <h1>Nao Existem Eventos</h1> </div>"
		prev.style.display = 'none'
		next.style.display = 'none'
	}
	if (evento.length == 1) {
		evento.removeChild(document.getElementById('semEvento'))
	}
	if (evento.length > 1) {
		prev.style.display = ''
		next.style.display = ''
	}
	adicionarEventos(evento)
}

function criarEventos() {
	var i = cont + 6
	eventos
			.push({
				nome : 'nome do evento',
				dataInicio : '23/03/201' + i,
				dataFim : '11/02/201' + cont,
				descricao : 'Lorem ipsum dolor sit amet,'
						+ 'consectetur adipiscing elit, sed do eiusmod tempor'
						+ 'incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam ',
				imagem : 'img/about-plan.jpg',
				local : 'Brasilia',
				hora : '10h',
				ativo : true,
				indice : cont
			})
	cont++
}

function criarEvento() {
	var nome = document.getElementById('nomeEvento')
	var dataI = document.getElementById('dataInicio')
	var dataF = document.getElementById('dataFim')
	var desc = document.getElementById('descricaoEvento')
	var tit = document.getElementById('tituloEvento')
	var img = document.getElementById('imgEvento')

	// if(validarData()) {
	eventos.push({
		nome : nome.value,
		dataInicio : dataI.value,
		dataFim : dataF.value,
		descricao : desc.value,
		local : '',
		hora : '',
		// imagem: img.value,
		ativo : true,
		indice : cont
	})

	window.close('adicionaEventoForm.html')
	// window.open('calendarioEventos.html')
	cont++
	// }else{
	// dataI.oninvalid=alert('Por favor, Preencha os Campos de Data')
	// }
}

function  carregarEventos(eventosBD){
	eventos = eventosBD;
	for(i=0; i < eventosBD.length; i++){
		console.log(eventosBD[i].nome)
		adicionarEventos(eventosBD[i]);
	}
}

function adicionarEventos(eventoBD) {
	var contPass = 1, contAtual = 1

	// Criando o cartão
	var divsCarousel = "<button type='button' class='btn btn-outline-light' style='border: hidden; background: transparent'"
			+ "data-toggle='modal' data-target='#modalEventos' onclick='detalheModal(procurarElementoID(event.srcElement))'>"
			+ "<div id='cartao' class='cartao'>"
			+ "<img src='img/about-plan.jpg' class='imagemEventoCartao img-fluid mb-2'>"
			+ "<h5 class='nomeEventoCartao col-12 text-center'></h5>"
			+ "<div class='infEvento container row text-center'><div class='miniCalendario'><div class='mesCalendario'></div>"
			+ "<div class='textoCalendario'></div></div>"
			+ "<div class='col-9 textoCalendario'><img src='img/iconEvento/clock.svg' class='iconeEvento img-fluid'>"
			+ "<small></small><br><img src='img/iconEvento/map-location.svg' class='iconeEvento img-fluid'>"
			+ "<small></small></div></div></div></div></button>";

	var eventoString = "<button type='button' class='btn btn-secondary' style='border: hidden; background: transparent;'"
			+ "data-toggle='modal' data-target='#modalEventos' onclick='detalheModal(procurarElementoID(event.srcElement))'>"
			+ "<div id='cartaoPassado' class='cartaoPassado'>"
			+ "<img src='img/about-plan.jpg' class='imagemEventoCartao img-fluid'>"
			+ "<h5 class='nomeEventoCartao col-12 text-center'></h5>"
			+ "<div class='infEvento container row text-center'><div class='miniCalendario'><div class='mesCalendario'></div>"
			+ "<div class='textoCalendario'></div></div>"
			+ "<div class='col-9 textoCalendario'><img src='img/iconEvento/clock.svg' class='iconeEvento img-fluid'>"
			+ "<small></small><br><img src='img/iconEvento/map-location.svg' class='iconeEvento img-fluid'>"
			+ "<small></small></div></div></div></div></button><hr>"


	for (i = 0; i < eventos.length; i++) {
		var cartaoId

		if (verificarData(eventos[i].dataInicio)) {
			var evento = document.getElementById('carousel')
			var carouselItem = document.createElement('div')
			carouselItem.id = 'parente' + contAtual;
			if (evento.children.length === 0) {
				carouselItem.className = 'carousel-item active'
			} else {
				carouselItem.className = 'carousel-item'
			}
			// Criando o objeto dentro do carrousel
			evento.appendChild(carouselItem)
			carouselItem.innerHTML = divsCarousel
			cartaoId = document.getElementById('cartao')
			cartaoId.id = cartaoId.id + eventoBD.id
			contAtual++
			document.getElementById(cartaoId.id).children[0].style.height = 300 + "px";
		} else {
			var evento = document.getElementById('eventosPassados')
			var secao = document.createElement('div')
			secao.id = 'parente' + eventoBD.id;

			evento.appendChild(secao)
			secao.innerHTML = eventoString

			// Atribuir id pra cada cartao e procurar os elementos filhos
			cartaoId = document.getElementById('cartaoPassado')
			cartaoId.id = cartaoId.id + contPass
			contPass++
			document.getElementById(cartaoId.id).children[0].style.height = 150 + "px";
		}
		var cartaoEncontrado = document.getElementById(cartaoId.id)
		var horaEvento = cartaoEncontrado.children[2].children[1].children[1]
		var localEvento = cartaoEncontrado.children[2].children[1].children[4]
		var mesEvento = cartaoEncontrado.children[2].children[0].children[0]
		var diaEvento = cartaoEncontrado.children[2].children[0].children[1]
		var img = cartaoEncontrado.children[0]
		var nome = cartaoEncontrado.children[1]

		img.src = 'img/about-plan.jpg'
		mesEvento.textContent = meses[desmebrarData(eventos[i].dataInicio, 1)]
				.substring(0, 3)
		diaEvento.textContent = desmebrarData(eventos[i].dataInicio, 0)
		nome.textContent = eventos[i].nome
		localEvento.textContent = eventos[i].local
		horaEvento.textContent = eventos[i].hora

	}
}

function verificarData(dataEnviada) {
	var dia = desmebrarData(dataEnviada, 0)
	var mes = desmebrarData(dataEnviada, 1)
	var ano = desmebrarData(dataEnviada, 2)
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

	data.textContent = objeto.children[2].children[0].children[1].textContent
			+ " de " + objeto.children[2].children[0].children[0].textContent
	data.style.marginRight = "5%";
	titulo.textContent = objeto.children[1].textContent
	console.log(objeto)
	descricao.textContent = eventos[2].descricao
}

function dataPorExtenso(data) {
	var dia = desmebrarData(dataEnviada, 0)
	var mes = desmebrarData(dataEnviada, 1)
	var ano = desmebrarData(dataEnviada, 2)
	return dia + ' de ' + meses[mes] + ' de ' + ano
}

function desmebrarData(data, parte) {
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

function pesquisarEvento() {
	var dataInicio = document.getElementById('dataInicio').value
	var dataFim = document.getElementById('dataFim').value
	var nome = document.getElementById('nomeEvento').value
	var event = null

	for (i = 0; i < eventos.length; i++) {
		if (nome !== null && nome === eventos[i].nome) {
			event = eventos[i]
		} else {
			if (eventos[i].dataFim <= dataFim
					&& eventos[i].dataInicio >= dataInicio) {
				event = eventos[i]
			}
		}
	}
	if (event === null) {
		alert('Evento Não Encontrado')
	} else {
		var evento = document.getElementById('eventosPesq')
		var carouselItem = document.createElement('div')
		var cartao = document.createElement('div')
		cartao.className = 'cartao'
		var carouselContainer = document.createElement('div')
		carouselContainer.className = 'carousel-container'
		var carouselContent = document.createElement('div')
		carouselContent.className = 'carousel-content'
		var quebraLinha = document.createElement('br')

		if (cont === 0) {
			carouselItem.className = 'carousel-item active'
		} else {
			carouselItem.className = 'carousel-item'
		}

		// Criando o objeto dentro do carrousel
		evento.appendChild(carouselItem)
		carouselItem.appendChild(cartao)
		carouselItem.appendChild(carouselContainer)
		carouselItem.appendChild(carouselContent)
		carouselContent.appendChild(quebraLinha)
	}
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

function adicionarEventoBD(evento) {
	$.ajax({
		method : "POST",
		contentType : "application/json",
		dataType : "application/json",
		url : "rest/eventos/salvar",
		data : evento
	}).done(function(data) {
	});
}

function recuperarEventosBD(evento) {
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


function percorreForms(form) {
	var nomeVar, valorVar;
	var json = '', tamanho = form.length;
	for (i = 0; i < tamanho; i++) {
		if (form[i].nodeName !== 'BUTTON') {
			if (i === 0) {
				json += '{ '
			}
			nomeVar = form[i].name;
			valorVar = form[i].value;
			if(valorVar.toString === ""){
				valorVar = null;
			}
			json += '"' + nomeVar.toString() + '": "' + valorVar.toString()
					+ '"';
			if (form[i + 1].nodeName !== 'BUTTON') {
				json += ",\n";
			}
		} else {
			i = tamanho;
		}
	}
	json += '\n}';
	adicionarEventoBD(json);
}