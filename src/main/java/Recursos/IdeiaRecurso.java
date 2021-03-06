package Recursos;

import Modelos.Ideia;
import java.util.List;

import javax.ejb.Stateless;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import Servicos.IdeiaServico;
import com.google.gson.Gson;

/**
 * Created by RSouza on 01/03/18.
 */
@Path("/cadastroIdeia")
public class IdeiaRecurso {
    private IdeiaServico servicoIdeia = new IdeiaServico();

    @GET
    @Path("/hello")
    @Produces(MediaType.APPLICATION_JSON)
    public Response hello(){
        return Response.ok(new Gson().toJson("Hello World")).build();
    }

    @GET
    @Path("/todos")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Ideia> listarIdeias(){
       return servicoIdeia.listarIdeias();
    }

    @GET
    @Path("/buscar/{nome}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Ideia> buscarIdeia(@PathParam("nome") String nome){
        return servicoIdeia.buscarIdeia(nome);
    }

    @POST
    @Path("/salvar")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Ideia salvarIdeia(Ideia ideia) throws Exception{
        return servicoIdeia.salvarIdeia(ideia);
    }

    @DELETE
    @Path("/excluir/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public void excluirIdeia(@PathParam("id") Long id){
        servicoIdeia.excluirIdeia(id);
//        return Response.ok(new Gson().toJson("Evento Excluido")).build();
    }
//
//    @GET
//    @Path("/pesquisa")
//    @Produces(MediaType.TEXT_HTML)
//    public Response pesquisarEvento(){
//        return
//
//    }


}
