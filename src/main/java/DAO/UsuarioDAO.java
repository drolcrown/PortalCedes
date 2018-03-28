package DAO;

import java.util.List;

import javax.persistence.Query;

import Modelos.Usuario;

/**
 * Created by RSouza on 01/03/18.
 */
public class UsuarioDAO extends DaoGenerico<Usuario> {
	public List<Usuario> recuperarUsuario(String nome, String tipo) {
		Query query = getEntityManagerFactory().createEntityManager()
				.createQuery("SELECT Usuario FROM Usuario AS Usuario WHERE Usuario.tipo = :tipo");
		query.setParameter(tipo, nome);

		return query.getResultList();
	}

	public List<Usuario> recuperarTodos() {
		Query query = getEntityManagerFactory().createEntityManager()
				.createQuery("SELECT usuario FROM Usuario AS usuario");

		return query.getResultList();
	}

}