package Modelos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="tb_inscr_evento")

public class Inscricao implements EntidadeGenerica{

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
    @Column
	private String nome;
    @Column
	private String matricula;
    @Column
	private String unidade;
	@Column
	private String ramal;
    @Column
	private String celular;
	
	public Inscricao() {
	}
	
	public Inscricao(String nome, String matricula, String unidade, String ramal, String celular) {
		this.nome = nome;
		this.matricula = matricula;
		this.unidade = unidade;
		this.ramal = ramal;
		this.celular = celular;
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

	public String getMatricula() {
		return matricula;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}

	public String getUnidade() {
		return unidade;
	}

	public void setUnidade(String unidade) {
		this.unidade = unidade;
	}

	public String getRamal() {
		return ramal;
	}

	public void setRamal(String ramal) {
		this.ramal = ramal;
	}

	public String getCelular() {
		return celular;
	}

	public void setCelular(String celular) {
		this.celular = celular;
	}

	public Class getClasseEntidade() {
		// TODO Auto-generated method stub
		return getClass();
	}

}
