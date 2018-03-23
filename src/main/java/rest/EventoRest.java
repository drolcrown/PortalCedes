package rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import Modelos.Evento;

//http://localhost:8080/Cedes160/rest/eventos/salvar
//http://localhost:8080/Cedes160/rest/eventos/get
@Path("/eventos")
public class EventoRest {

	@POST
	@Path("/salvar")
	@Consumes("application/json")
	public Response salvar(Evento evento) {
		String result = "Restful example : " + evento;
		System.out.println(Response.status(200).entity(result).build());
		return Response.status(200).entity(result).build();
	}

	@GET
	@Path("/get")
	@Produces("application/json")
	public Evento getEventoInJSON() {
		Evento evento = new Evento();
		evento.setDataFim("10/10/2010");
		evento.setDataInicio("10/10/2010");
		evento.setDescricao("teste");
		evento.setHora("14:00");
		evento.setNome("Teste");
		return evento;

	}
}