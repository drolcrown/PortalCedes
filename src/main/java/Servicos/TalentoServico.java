package Servicos;

import DAO.TalentoDAO;
import Modelos.Talento;

import java.util.List;

/**
 * Created by RSouza on 01/03/18.
 */
public class TalentoServico {
	private TalentoDAO repositorioTalento = new TalentoDAO();


	public List<Talento> listarTalentos(){
		return repositorioTalento.recuperarTodos();
	}

	public List<Talento> buscarTalento(String nome){
	 return repositorioTalento.recuperarTalentoPorNome(nome);
	}

	public Talento salvarTalento(Talento talento) throws Exception{
		return repositorioTalento.salvar(talento);
	}

	public void excluirTalento(Long id){
		repositorioTalento.excluirPorId(Talento.class, id);
	}
}
