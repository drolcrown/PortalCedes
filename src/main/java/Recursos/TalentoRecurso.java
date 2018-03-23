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

import com.google.gson.Gson;

import Modelos.Talento;
import Servicos.TalentoServico;

/**
 * Created by RSouza on 01/03/18.
 */
@Path("/talento")
public class TalentoRecurso {
	private TalentoServico servicoTalento = new TalentoServico();

	@GET
	@Path("/hello")
	@Produces(MediaType.APPLICATION_JSON)
	public Response hello() {
		return Response.ok(new Gson().toJson("Hello World")).build();
	}

	@GET
	@Path("/todos")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Talento> listarTalentos() {
		return servicoTalento.listarTalentos();
	}

	@GET
	@Path("/buscar/{nome}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Talento> buscarTalento(@PathParam("nome") String nome) {
		return servicoTalento.buscarTalento(nome);
	}

	@POST
	@Path("/salvar")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Talento salvarTalento(Talento talento) throws Exception {
		return servicoTalento.salvarTalento(talento);
	}

	@DELETE
	@Path("/excluir/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public void excluirTalento(@PathParam("id") Long id) {
		servicoTalento.excluirTalento(id);
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
