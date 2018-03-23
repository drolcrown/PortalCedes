package eventos;

import static com.jayway.restassured.RestAssured.given;

import java.util.Date;

import org.junit.Test;

import Config.TestConfig;
import Modelos.Evento;

public class EventosTeste extends TestConfig {
	@Test
	public void testeBasico() {
		given().when().get("eventos/hello").then().statusCode(200);
	}

	@Test
	public void buscarNomeEventoTest() {
		given().when().get("eventos/buscar/ChatBot1").then().statusCode(200);
		given().when().get("eventos/buscar/ChatBot12").then().statusCode(500);
	}

	@Test
	public void salvarEventoTest() {
		String data = new Date().toString();
		Evento evento = new Evento(1L, "", "Orbita", data, data, "", "", "");

		given().contentType("application/json").body(evento).when().post("eventos/salvar").then().statusCode(200);
	}
}
