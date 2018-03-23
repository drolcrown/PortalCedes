package DAO;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import Modelos.EntidadeGenerica;

public class DaoGenerico<T extends EntidadeGenerica> {

	private static EntityManagerFactory fabrica = null;
	private static final String PERSISTANCE_UNIT = "primary";

	public static EntityManagerFactory getEntityManagerFactory() {
		if (fabrica == null) {
			fabrica = Persistence.createEntityManagerFactory(PERSISTANCE_UNIT);
		}

		return fabrica;
	}

	public static void shutdown() {
		if (fabrica != null) {
			fabrica.close();
		}
	}

	private EntityManager em;

	public T salvar(T entidade) {
		em = getEntityManagerFactory().createEntityManager();

		try {
			em.getTransaction().begin();
			if (entidade.getId() == null) {
				em.persist(entidade);
			} else {
				if (!em.contains(entidade)) {
					if (em.find(entidade.getClass(), entidade.getId()) == null) {
						// throw new Exception("Erro ao Atualizar Entidade");
					}
				}
				entidade = em.merge(entidade);
			}
			em.getTransaction().commit();
		} finally {
			em.close();
		}
		return entidade;
	}

	public void excluirPorId(Class<T> classe, Long id) {
		em = getEntityManagerFactory().createEntityManager();
		T entidade = em.find(classe, id);
		try {
			em.remove(entidade);
		} finally {
			em.close();
		}
	}

	public T consultarPorId(Class<T> classe, Long id) {
		em = getEntityManagerFactory().createEntityManager();
		T entidade = null;

		try {
			entidade = em.find(classe, id);
		} finally {
			em.close();
		}
		return entidade;
	}
}
