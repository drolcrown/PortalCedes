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

import Modelos.Ideia;
import Servicos.IdeiaServico;

/**
 * Created by RSouza on 01/03/18.
 */
@Path("/cadastroIdeia")
public class IdeiaRecurso {
	private IdeiaServico servicoIdeia = new IdeiaServico();

	@GET
	@Path("/hello")
	@Produces(MediaType.APPLICATION_JSON)
	public Response hello() {
		return Response.ok("Hello World").build();
	}

	@GET
	@Path("/todos")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Ideia> listarIdeias() {
		return servicoIdeia.listarIdeias();
	}

	@GET
	@Path("/buscar/{nome}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Ideia> buscarIdeia(@PathParam("nome") String nome) {
		return servicoIdeia.buscarIdeia(nome);
	}

	@POST
	@Path("/salvar")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Ideia salvarIdeia(Ideia ideia) throws Exception {
		return servicoIdeia.salvarIdeia(ideia);
	}

	@DELETE
	@Path("/excluir/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public void excluirIdeia(@PathParam("id") Long id) {
		servicoIdeia.excluirIdeia(id);
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
