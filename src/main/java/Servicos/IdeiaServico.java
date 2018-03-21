package Servicos;

import DAO.IdeiaDAO;
import Modelos.Ideia;

import java.util.List;

/**
 * Created by RSouza on 01/03/18.
 */
public class IdeiaServico {
	private IdeiaDAO repositorioIdeia = new IdeiaDAO();


	public List<Ideia> listarIdeias(){
		return repositorioIdeia.recuperarTodos();
	}

	public List<Ideia> buscarIdeia(String nome){
	 return repositorioIdeia.recuperarIdeiaPorNome(nome);
	}

	public Ideia salvarIdeia(Ideia ideia) throws Exception{
		return repositorioIdeia.salvar(ideia);
	}

	public void excluirIdeia(Long id){
		repositorioIdeia.excluirPorId(Ideia.class, id);
	}
}
