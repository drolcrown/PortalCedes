package Recursos;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import Modelos.Evento;
import Servicos.EventoServico;

/**
 * Created by RSouza on 01/03/18.
 */
@Path("/eventos")
public class EventoRecurso {
	private EventoServico servicoEvento = new EventoServico();

	@GET
	@Path("/hello")
	@Produces(MediaType.APPLICATION_JSON)
	public Response hello() {
		return Response.ok("Hello World").build();
	}

	@GET
	@Path("/todos")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Evento> listarEventos() {
		return servicoEvento.listarEventos();
	}

	@GET
	@Path("/buscar/{nome}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Evento> buscarEvento(@PathParam("nome") String nome) {
		return servicoEvento.buscarEvento(nome);
	}

	@POST
	@Path("/salvar")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Evento salvarEvento(Evento evento) throws Exception {
		return servicoEvento.salvarEvento(evento);
	}

	@DELETE
	@Path("/excluir/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public void excluirEvento(@PathParam("id") Long id) {
		servicoEvento.excluirEvento(id);
		// return Response.ok(new Gson().toJson("Evento Excluido")).build();
	}
	//
	// @GET
	// @Path("/pesquisa")
	// @Produces(MediaType.TEXT_HTML)
	// public Response pesquisarEvento(){
	// return
	//
	// }

}
