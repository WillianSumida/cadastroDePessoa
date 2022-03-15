import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa.model';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css'],
})
export class ListaPessoasComponent implements OnInit {

  lista : Pessoa[] = [
    {nome:'teste', dataNascimento: new Date('2001-12-11'), imagem:'https://www.thispersondoesnotexist.com/image'},
    {nome:'teste', dataNascimento: new Date('2001-12-12'), imagem:''},]

  adicionarPessoa(pessoa:Pessoa){
      this.lista.push(pessoa)
  }

  deletarPessoa(delPessoa:Pessoa){
    const index = this.lista.findIndex(pessoa => pessoa.nome === delPessoa.nome)
    if (index > -1) {
      this.lista.splice(index, 1);
    }
      return this.lista;
  }

  getPessoa(getPessoa:Pessoa){
    const index = this.lista.findIndex(pessoa => pessoa.nome === getPessoa.nome)
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
