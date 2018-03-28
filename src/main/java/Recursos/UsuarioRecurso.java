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

import Modelos.Usuario;
import Servicos.UsuarioServico;

/**
 * Created by RSouza on 01/03/18.
 */
@Path("/usuarios")
public class UsuarioRecurso {
	private static String NOME = "nome", LOCAL = "local", DATA = "data";
	private UsuarioServico servicoUsuario = new UsuarioServico();

	@GET
	@Path("/hello")
	@Produces(MediaType.APPLICATION_JSON)
	public Response hello() {
		return Response.ok(new Gson().toJson("Hello World")).build();
	}

	@GET
	@Path("/todos")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Usuario> listarUsuarios() {
		return servicoUsuario.listarUsuarios();
	}

	@GET
	@Path("/buscar/{json}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Usuario> buscarUsuario(@PathParam("json") String json) {
		return servicoUsuario.buscarUsuario(json);
	}

	@GET
	@Path("/buscarPorLocal/{nome}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Usuario> buscarUsuarioPorNome(@PathParam("nome") String nome) {
		return servicoUsuario.buscarUsuario(nome, NOME);
	}

	@GET
	@Path("/buscarPorData/{data}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Usuario> buscarUsuarioPorData(@PathParam("data") String data) {
		return servicoUsuario.buscarUsuario(data, DATA);
	}

	@GET
	@Path("/buscarPorLocal/{local}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Usuario> buscarUsuarioPorLocal(@PathParam("local") String local) {
		return servicoUsuario.buscarUsuario(local, LOCAL);
	}

	@POST
	@Path("/salvar")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Usuario salvarUsuario(Usuario Usuario) throws Exception {
		return servicoUsuario.salvarUsuario(Usuario);
	}

	@DELETE
	@Path("/excluir/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public void excluirUsuario(@PathParam("id") Long id) {
		servicoUsuario.excluirUsuario(id);
		// return Response.ok(new Gson().toJson("Usuario Excluido")).build();
	}
	//
	// @GET
	// @Path("/pesquisa")
	// @Produces(MediaType.TEXT_HTML)
	// public Response pesquisarUsuario(){
	// return
	//
	// }

}