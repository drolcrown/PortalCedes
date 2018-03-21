package DAO;

import Modelos.Inscricao;

import javax.persistence.Query;
import java.util.List;

/**
 * Created by RSouza on 01/03/18.
 */
public class InscricaoDAO extends DaoGenerico<Inscricao> {
    public List<Inscricao>recuperarInscricaoPorNome(String nome){
        Query query = getEntityManager()
                .createQuery("SELECT inscricao FROM Inscricao AS inscricao WHERE inscricao.nome = :nome");
        query.setParameter("nome", nome);

        return query.getResultList();
    }

    public List<Inscricao> recuperarTodos(){
        Query query = getEntityManager().createQuery("SELECT inscricao FROM Inscricao AS inscricao");

        return query.getResultList();
    }

}
