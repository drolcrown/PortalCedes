package DAO;

import Modelos.Ideia;

import javax.persistence.Query;
import java.util.List;

/**
 * Created by RSouza on 01/03/18.
 */
public class IdeiaDAO extends DaoGenerico<Ideia> {
    public List<Ideia> recuperarIdeiaPorNome(String nome){
        Query query = getEntityManagerFactory().createEntityManager()
                .createQuery("SELECT Ideia FROM Ideia AS Ideia WHERE Ideia.nome = :nome");
        query.setParameter("nome", nome);

        return query.getResultList();
    }

    public List<Ideia> recuperarTodos(){
        Query query = getEntityManagerFactory().createEntityManager().createQuery("SELECT Ideia FROM Ideia AS Ideia");

        return query.getResultList();
    }

}
