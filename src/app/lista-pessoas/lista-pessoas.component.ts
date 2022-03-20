import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa.model';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css'],
})
export class ListaPessoasComponent implements OnInit {

  @Input() lista : Pessoa[] = [];

  deletarPessoa(delPessoa:Pessoa) : void{
    const index = this.lista.findIndex(pessoa => pessoa.nome === delPessoa.nome)
    if (index > -1) {
      this.lista.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
