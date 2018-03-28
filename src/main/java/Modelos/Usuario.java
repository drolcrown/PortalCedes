package Modelos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_usuario")
public class Usuario implements EntidadeGenerica {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column
	private String nome;

	@Column
	private String matricula;

	@Column
	private String fone;

	@Column
	private String ramal;

	@Column
	private String unidade;

	@Column
	private String email;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Usuario() {
	}

	public Usuario(Long id, String nome, String matricula, String fone, String ramal, String unidade) {
		super();
		this.id = id;
		this.nome = nome;
		this.matricula = matricula;
		this.fone = fone;
		this.ramal = ramal;
		this.unidade = unidade;
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

	public String getFone() {
		return fone;
	}

	public void setFone(String fone) {
		this.fone = fone;
	}

	public String getRamal() {
		return ramal;
	}

	public void setRamal(String ramal) {
		this.ramal = ramal;
	}

	public String getUnidade() {
		return unidade;
	}

	public void setUnidade(String unidade) {
		this.unidade = unidade;
	}

	@Override
	public String toString() {
		return "{id=" + id + "},\n{nome=" + nome + "},\n{matricula=" + matricula + "},\n{fone=" + fone + "},\n{ramal="
				+ ramal + "},\n{unidade=" + unidade + "},\n{email=" + email + "}";
	}

}