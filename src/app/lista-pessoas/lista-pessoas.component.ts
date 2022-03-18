import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa.model';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css'],
})
export class ListaPessoasComponent implements OnInit {

  lista1 : Pessoa[] = [
    {nome:'teste', dataNascimento: new Date('2001-12-11'), imagem:'https://www.thispersondoesnotexist.com/image'},
    {nome:'teste', dataNascimento: new Date('2001-12-12'), imagem:''},]



    @Input() lista : Pessoa[] = [];

    deletarPessoa(delPessoa:Pessoa){
      alert(JSON.stringify(this.lista));
      const index = this.lista.findIndex(pessoa => pessoa.nome === delPessoa.nome)
      if (index > -1) {
        this.lista.splice(index, 1);
      }
    }

  constructor() { }

  ngOnInit(): void {
  }

}
