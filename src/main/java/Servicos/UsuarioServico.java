package Servicos;

import java.util.ArrayList;
import java.util.List;

import org.jgroups.util.Tuple;

import DAO.UsuarioDAO;
import Modelos.Usuario;
import util.JsonUtil;

/**
 * Created by RSouza on 01/03/18.
 */
public class UsuarioServico {
	private UsuarioDAO repositorioUsuario = new UsuarioDAO();

	public List<Usuario> listarUsuarios() {
		return repositorioUsuario.recuperarTodos();
	}

	public List<Usuario> buscarUsuario(String json) {
		List<Tuple> vetorTupla = new JsonUtil().desmembrarJson(json);
		List<Usuario> lista = new ArrayList<Usuario>();

		for (Tuple tupla : vetorTupla) {
			lista.addAll(buscarUsuario(tupla.getVal1().toString(), tupla.getVal2().toString()));
		}
		return lista;
	}

	public List<Usuario> buscarUsuario(String nome, String tipo) {
		return repositorioUsuario.recuperarUsuario(nome, tipo);
		// if (tipo.equals("nome")) {
		// }
		// if (tipo.equals("data")) {
		// return repositorioUsuario.recuperarUsuarioPorNome(nome);
		// }
		// if (tipo.equals("local")) {
		// return repositorioUsuario.recuperarUsuarioPorNome(nome);
		// }
	}

	public Usuario salvarUsuario(Usuario Usuario) throws Exception {
		return repositorioUsuario.salvar(Usuario);
	}

	public void excluirUsuario(Long id) {
		repositorioUsuario.excluirPorId(Usuario.class, id);
	}
}