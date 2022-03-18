import { Component, OnInit } from '@angular/core';
import { ListaPessoasComponent } from '../lista-pessoas/lista-pessoas.component';
import { Pessoa } from '../model/pessoa.model';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  
})



export class FormularioComponent implements OnInit {

  nome:string = ""
  dataNascimento:string = ""
  imagem:string = ""

  listaPessoa : Pessoa[] = [
    {nome:'teste', dataNascimento: new Date('2001-12-11'), imagem:'https://www.thispersondoesnotexist.com/image'},
    ]

  onSubmit(){
    const pessoa: Pessoa = {
      nome:this.nome,
      dataNascimento: new Date(this.dataNascimento),
      imagem: this.imagem
    }

    //VERIFICA SE O NOME JA EXISTE NA LISTA
    if(!this.getPessoa(pessoa)){
      if(pessoa.imagem === "") pessoa.imagem = 'http://placehold.jp/150x150.png'
      alert("Adicionado")
      this.adicionarPessoa(pessoa)
    }else{
      alert("Esse nome ja foi adicionado")
    }
  }

  adicionarPessoa(pessoa:Pessoa){
      this.listaPessoa.push(pessoa)
      alert(JSON.stringify(this.listaPessoa));
  }

  getPessoa(getPessoa:Pessoa){
    const index = this.listaPessoa.findIndex(pessoa => pessoa.nome === getPessoa.nome)
    if (index > -1) {
      return true;
    } else{
      return false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
