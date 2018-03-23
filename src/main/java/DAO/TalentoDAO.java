package DAO;

import Modelos.Talento;

import javax.persistence.Query;
import java.util.List;

/**
 * Created by RSouza on 01/03/18.
 */
public class TalentoDAO extends DaoGenerico<Talento> {
    public List<Talento> recuperarTalentoPorNome(String nome){
        Query query = getEntityManagerFactory().createEntityManager()
                .createQuery("SELECT talento FROM Talento AS talento WHERE talento.nome = :nome");
        query.setParameter("nome", nome);

        return query.getResultList();
    }

    public List<Talento> recuperarTodos(){
        Query query = getEntityManagerFactory().createEntityManager().createQuery("SELECT talento FROM Talento AS talento");

        return query.getResultList();
    }

}