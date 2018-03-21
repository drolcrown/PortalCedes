package Servicos;

import DAO.InscricaoDAO;
import Modelos.Inscricao;

import java.util.List;

/**
 * Created by RSouza on 01/03/18.
 */
public class InscricaoServico {
	private InscricaoDAO repositorioInscricao = new InscricaoDAO();


	public List<Inscricao> listarInscricoes(){
		return repositorioInscricao.recuperarTodos();
	}

	public List<Inscricao> buscarInscricao(String nome){
	 return repositorioInscricao.recuperarInscricaoPorNome(nome);
	}

	public Inscricao salvarInscricao(Inscricao inscricao) throws Exception{
		return repositorioInscricao.salvar(inscricao);
	}

	public void excluirInscricao(Long id){
		repositorioInscricao.excluirPorId(Inscricao.class, id);
	}
}
