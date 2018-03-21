package Recursos;

import Modelos.Talento;
import java.util.List;

import javax.ejb.Stateless;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import Servicos.TalentoServico;
import com.google.gson.Gson;

/**
 * Created by RSouza on 01/03/18.
 */
@Path("/eventos")
public class TalentoRecurso {
    private TalentoServico servicoTalento = new TalentoServico();

    @GET
    @Path("/hello")
    @Produces(MediaType.APPLICATION_JSON)
    public Response hello(){
        return Response.ok(new Gson().toJson("Hello World")).build();
    }

    @GET
    @Path("/todos")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Talento> listarTalentos(){
       return servicoTalento.listarTalentos();
    }

    @GET
    @Path("/buscar/{nome}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Talento> buscarTalento(@PathParam("nome") String nome){
        return servicoTalento.buscarTalento(nome);
    }

    @POST
    @Path("/salvar")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Talento salvarTalento(Talento talento) throws Exception{
        return servicoTalento.salvarTalento(talento);
    }

    @DELETE
    @Path("/excluir/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public void excluirTalento(@PathParam("id") Long id){
        servicoTalento.excluirTalento(id);
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

