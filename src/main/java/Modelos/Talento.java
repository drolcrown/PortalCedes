package Modelos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="tb_talento")

public class Talento implements EntidadeGenerica{

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
    @Column
	private String matricula;
    @Column
	private String nome;
    @Column
	private String ramal;
	@Column
	private String celular;
    @Column
	private String desctalento;
	
	public Talento() {
	}
	
	public Talento(String matricula, String nome, String ramal, String celular, String desctalento) {
		this.matricula = matricula;
		this.nome = nome;
		this.ramal = ramal;
		this.celular = celular;
		this.desctalento = desctalento;
	}

	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMatricula() {
		return matricula;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
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

	public String getDesctalento() {
		return desctalento;
	}

	public void setDesctalento(String desctalento) {
		this.desctalento = desctalento;
	}

	public Class getClasseEntidade() {
		// TODO Auto-generated method stub
		return getClass();
	}

}
