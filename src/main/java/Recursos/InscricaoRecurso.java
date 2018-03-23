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

import Modelos.Inscricao;
import Servicos.InscricaoServico;

/**
 * Created by RSouza on 01/03/18.
 */
@Path("/inscricao")
public class InscricaoRecurso {
	private InscricaoServico servicoInscricao = new InscricaoServico();

	@GET
	@Path("/hello")
	@Produces(MediaType.APPLICATION_JSON)
	public Response hello() {
		return Response.ok(new Gson().toJson("Hello World")).build();
	}

	@GET
	@Path("/todos")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Inscricao> listarInscricoes() {
		return servicoInscricao.listarInscricoes();
	}

	@GET
	@Path("/buscar/{nome}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Inscricao> buscarInscricao(@PathParam("nome") String nome) {
		return servicoInscricao.buscarInscricao(nome);
	}

	@POST
	@Path("/salvar")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Inscricao salvarInscricao(Inscricao inscricao) throws Exception {
		return servicoInscricao.salvarInscricao(inscricao);
	}

	@DELETE
	@Path("/excluir/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public void excluirInscricao(@PathParam("id") Long id) {
		servicoInscricao.excluirInscricao(id);
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
