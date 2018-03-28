package Modelos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_evento")
public class Evento implements EntidadeGenerica {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column
	private String nome;

	@Column
	private String dataInicio;

	@Column
	private String dataFim;

	@Column
	private String descricao;

	@Column
	private String local;

	@Column
	private String hora;

	@Column
	private String imagem;

	@Column
	private Boolean ativo;

	public Boolean getAtivo() {
		return ativo;
	}

	public void setAtivo(Boolean ativo) {
		this.ativo = ativo;
	}

	public Evento() {
	}

	public Evento(Long id, String nome, String dataInicio, String dataFim, String descricao, String local, String hora,
			String imagem) {
		super();
		this.id = id;
		this.nome = nome;
		this.dataInicio = dataInicio;
		this.dataFim = dataFim;
		this.descricao = descricao;
		this.local = local;
		this.hora = hora;
		this.imagem = imagem;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDataInicio() {
		return dataInicio;
	}

	public void setDataInicio(String dataInicio) {
		this.dataInicio = dataInicio;
	}

	public String getDataFim() {
		return dataFim;
	}

	public void setDataFim(String dataFim) {
		this.dataFim = dataFim;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getLocal() {
		return local;
	}

	public void setLocal(String local) {
		this.local = local;
	}

	public String getHora() {
		return hora;
	}

	public void setHora(String hora) {
		this.hora = hora;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	@Override
	public String toString() {
		return "{id=" + id + "},\n{nome=" + nome + "},\n{dataInicio=" + dataInicio + "},\n{dataFim=" + dataFim
				+ "},\n{descricao=" + descricao + "},\n{local=" + local + "},\n{hora=" + hora + "},\n{imagem=" + imagem
				+ "}";
	}
}