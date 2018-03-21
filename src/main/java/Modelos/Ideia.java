package Modelos;

import javax.persistence.*;

@Entity
@Table(name ="tb_ideia")

public class Ideia implements EntidadeGenerica {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
    @Column
    private String nome;
    @Column
    private String equipe;
    @Column
    private String coordenacao;
    @Column
    private String nomeIdeia;
    @Column
    private String descIdeia;


public Ideia(){
	
}

public Ideia(String nome, String equipe, String coordenacao, String nomeIdeia, String descIdeia) {
	this.nome = nome;
	this.equipe = equipe;
	this.coordenacao = coordenacao;
	this.nomeIdeia = nomeIdeia;
	this.descIdeia = descIdeia;
	
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

public String getEquipe() {
	return equipe;
}

public void setEquipe(String equipe) {
	this.equipe = equipe;
}

public String getCoordenacao() {
	return coordenacao;
}

public void setCoordenacao(String coordenacao) {
	this.coordenacao = coordenacao;
}

public String getNomeIdeia() {
	return nomeIdeia;
}

public void setNomeIdeia(String nomeIdeia) {
	this.nomeIdeia = nomeIdeia;
}

public String getDescIdeia() {
	return descIdeia;
}

public void setDescIdeia(String descIdeia) {
	this.descIdeia = descIdeia;
}

public Class getClasseEntidade() {
	// TODO Auto-generated method stub
	return this.getClass();
}

}