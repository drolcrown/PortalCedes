package eventos;

import DAO.EventoDAO;
import Modelos.Evento;

public class teste {
	public static void main(String[] args) {

		Evento evento = new Evento(1L, "Rafa3", "12/03/2016", "22/03/2016", "Brasilia", "9h", "", " ");

		EventoDAO eventoDAO = new EventoDAO();
		eventoDAO.salvar(evento);
		// Evento evento = eventoDAO.consultarPorId(Evento.class, 7L);

		System.out.println(evento.getId());
		// eventoDAO.excluir(evento);
	}
}
